import React from "react";
import { PlanetContext, Planet } from "../PlanetContext";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CircularProgress from "@mui/material/CircularProgress";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function PlanetSearch() {
  const { searchPlanets, addPlanets, savedPlanets } =
    React.useContext(PlanetContext);
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [options, setOptions] = React.useState<Array<Planet>>([]);
  const [value, setValue] = React.useState<Array<Planet>>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const options = await searchPlanets!(input); // For demo purposes.

      if (active) {
        setOptions([...options]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading, input, searchPlanets]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return (
    <Autocomplete
      multiple
      value={value}
      id="planet-search"
      disableCloseOnSelect
      getOptionDisabled={(option) =>
        savedPlanets.filter((planet) => planet.name === option.name).length > 0
      }
      sx={{
        minWidth: 500,
        alignSelf: "start",
        color: "primary",
        bgcolor: "black",
      }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInput(newInputValue);
      }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      style={{ width: 500 }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          //@ts-ignore
          event.defaultMuiPrevented = true;
          addPlanets(value);
          setValue([]);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search your Planet(s)"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

export { PlanetSearch };
