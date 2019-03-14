import React, { useReducer, useCallback } from 'react';
import FormInput from '../components/FormInput';
import { Box, Text, Flex } from 'rebass';
import Button from '../components/Button';


const reducer = (state, {type, name, value}) => {
  switch(type) {
    case 'UPDATE_INPUT': 
      return {...state, [name]: value}
    default:
      return state;
  }
}


const fields = [


  {name: 'date', label: 'Date', width: 1/3, hint: "October 21-25, 2018, 01.18.2018"},
  {name: 'time', label: 'Time', width: 1/3, hint: "4pm - 6pm, Starting at noon"},
  {name: 'location', label: 'Location', width: 1/3, hint: "123 Anywhere St., Phil’s House"},
  {name: 'host', label: 'host', width: 1/3, hint: "Presented by ACME Corp, ACME Corp Presents, ACME Corp"},
  {name: 'cost', label: 'Cost', width: 1/3, hint: "$15, $5 per person"},
  {name: 'details', label: 'Details', width: 1, hint: "Provide a description of the event with any details someone might need to know."},
  {name: 'descriptive', label: 'Descriptive Text', width: 1, hint: "Come Join Us!, It's going to be a blast!, A special concert for the Rigby Foundation"},
]

function ContentForm() {

  const [state, dispatch] = useReducer(reducer, {})

  const handleInputChange = useCallback(e => {
    dispatch({type: 'UPDATE_INPUT', name: e.target.name, value: e.target.value});
  })

  return (
    <Box px={4}>
      
      <Box mb={3}>
        <FormInput
          label="Event Name"
          value={state.eventName || ''}
          placeholder="Required"
          name="eventName"
          hint="Hurrican Relief Food Drive, Varsity Volleyball Tryouts"
          onChange={handleInputChange}
        />
      </Box>

      <Text
        textAlign="left"
        fontSize={3}
        mb={1}
        color="gray"
        children="What should someone know about the event?"
      />
      <Text
        textAlign="left"
        fontSize={0}
        color="gray"
        style={{fontStyle: 'italic'}}
        mb={3}
        children="Only complete the relevant fields"
      />

      <Flex mx={-2} mb={3} flexWrap="wrap">
        {fields.map(field => (
          <Box p={2} width={field.width} key={field.name}>
            <FormInput
              label={field.label}
              value={state[field.name] || ''}
              name={field.name}
              hint={field.hint}
              onChange={handleInputChange}
            />
          </Box>
        ))}        
      </Flex>
      <Button
        onClick={() => null}
        children="Done"
      />

    </Box>
  )
}

export default ContentForm;