import { Autocomplete, CircularProgress, TextField } from '@mui/material'
import React, { useMemo } from 'react'

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

export default function MuiAutocomplete(props) {
  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = React.useState([])
  const loading = open && options.length === 0

  React.useEffect(() => {
    let active = true

    if (!loading) {
      return undefined
    }

    // (async () => {
    //   await sleep(1e3) // For demo purposes.

    if (active) {
      setOptions(props.options)
    }
    // })()

    return () => {
      active = false
    }
  }, [loading, props.options])

  React.useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  // VALUE LOGIC
  const [value, setValue] = React.useState('')
  const [inputValue, setInputValue] = React.useState('')

  React.useMemo(() => {
    if (options.length) {
      setValue(options[0].name)
      setInputValue(options[0].name)
      // console.log(value)
      // console.log(inputValue)
    }
  }, [options])

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
      }}
      id={props.id}
      sx={{ width: '100%' }}
      fullWidth={true}
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      isOptionEqualToValue={(option, value) => {
        console.log(option.name)
        console.log(value.name)
        return option.name === value.name
      }}
      getOptionLabel={(option) => {
        console.log(option.name)
        return option.name
      }}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
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
  )
}
