import React, { useReducer, useCallback, useEffect, useContext } from 'react';
import FormInput from '../components/FormInput';
import { Box, Text, Flex } from 'rebass';
import Button from '../components/Button';
import produce from 'immer'
import { DispatchContext } from './Queue';

const reducer = produce((draft, {name, value}) => {
  draft[name] = value;
});


const fields = [
  {name: 'date', label: 'Date', width: 1/3, hint: "October 21-25, 2018, 01.18.2018"},
  {name: 'time', label: 'Time', width: 1/3, hint: "4pm - 6pm, Starting at noon"},
  {name: 'location', label: 'Location', width: 1/3, hint: "123 Anywhere St., Phil’s House"},
  {name: 'host', label: 'host', width: 1/3, hint: "Presented by ACME Corp, ACME Corp Presents, ACME Corp"},
  {name: 'cost', label: 'Cost', width: 1/3, hint: "$15, $5 per person"},
  {name: 'details', label: 'Details', width: 1, rows: 3, hint: "Provide a description of the event with any details someone might need to know."},
  {name: 'descriptive', label: 'Descriptive Text', width: 1, hint: "Come Join Us!, It's going to be a blast!, A special concert for the Rigby Foundation"},
]

const TEXT_STAGE = {type: 'content', focus: 'text'}

function ContentForm(props) {
  const rootDispatch = useContext(DispatchContext);
  const [state, dispatch] = useReducer(reducer, {})

  useEffect(() => {
    // Set the stage permanently as this until we manually click done.
    // rootDispatch({type: 'SET_STAGE', stage: TEXT_STAGE});
    const content = props.flyer._textTypes;
    content.forEach(c => dispatch({type: c.type, value: c.text}));
  }, [])

  useEffect(() => {
    // When the state changes, update the flyer
    console.log("UPDATING FLYER");

    const text = Object.entries(state)
      .filter(([type, text]) => text.trim().length)
      .map(([type, text]) => ({text, type}))

    rootDispatch({
      type: 'STEP', 
      stage: TEXT_STAGE, 
      skipHistory: true,
      forceGeneration: true,
      userInput: {text}
    })
  }, [state])

  const handleDone = useCallback(() => {
    // Clear the stage so the generator can take over.
    rootDispatch({type: 'ADVANCE_STAGE', upgrade: true});
  })



  const handleInputChange = useCallback(e => {
    dispatch(e.target);
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
              rows={field.rows}
              hint={field.hint}
              onChange={handleInputChange}
            />
          </Box>
        ))}        
      </Flex>
      <Button
        disabled={!state.eventName}
        onClick={handleDone}
        children="Done"
      />

    </Box>
  )
}

export default ContentForm;