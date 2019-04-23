import React, { useReducer, useCallback, useEffect, useContext } from 'react';
import FormInput from '../components/FormInput';
import { Box, Text, Flex } from 'rebass';
import Button from '../components/Button';
import produce from 'immer'
import { DispatchContext } from './Queue';
import { getTemplateTextTypes } from '../core/utils/template-utils';
import isEqual from 'lodash/isEqual';
import { useDebounce } from '../core/lib/hooks';

const reducer = produce((draft, {name, value}) => {
  draft[name] = value;
});


const fields = [
  {name: 'date', label: 'Date', width: 1/3, hint: "October 21-25, 2018, 01.18.2018"},
  {name: 'time', label: 'Time', width: 1/3, hint: "4pm - 6pm, Starting at noon"},
  {name: 'location', label: 'Location', width: 1/3, hint: "123 Anywhere St., Phil’s House"},
  {name: 'host', label: 'host', width: 1/3, hint: "Presented by ACME Corp, ACME Corp Presents, ACME Corp"},
  // {name: 'cost', label: 'Cost', width: 1/3, hint: "$15, $5 per person"},
  {name: 'descriptive', label: 'Subtitle', width: 2/3, hint: "Come Join Us!, It's going to be a blast!, A special concert for the Rigby Foundation"},
  {name: 'details', label: 'Details', width: 1, rows: 3, hint: "Provide a description of the event with any details someone might need to know."},
]

const TEXT_STAGE = {type: 'content', key: 'content.text'}

function ContentForm({flyer}) {
  const rootDispatch = useContext(DispatchContext);
  const initState = React.useMemo(() => {
    const textTypes = getTemplateTextTypes(flyer, true);
    const entries = textTypes.map(t => ([t.type, t.text]))
    const state = Object.fromEntries(entries)
    state.keywords = flyer.keywords;
    return state;
  }, [])

  const [state, dispatch] = useReducer(reducer, initState)

  const keywords = useDebounce(state.keywords, 3000);

  useEffect(() => {
    if(isEqual(state, initState)) return;

    const text = Object.entries(state)
      .filter(([type, text]) => text.trim().length && type !== 'keywords')
      .map(([type, text]) => ({text, type}))

    rootDispatch({
      type: 'STEP', 
      stage: TEXT_STAGE,
      skipHistory: true,
      forceGeneration: true,
      userInput: {text, keywords: state.keywords}
    })
  }, [state])

  useEffect(() => {
    if(keywords) {
      rootDispatch({type: 'INIT_IMAGE_SEARCH',
        userProvided: true,
        query: keywords,
        dispatch: rootDispatch,
      })
      // TODO: Switch this to a debounceCallback instead of a debounced value, 
      // since this won't get called if the user exits the form before the debounce time.
    }
  }, [keywords]);

  const handleDone = useCallback(() => {
    // Clear the stage so the generator can take over.
    rootDispatch({type: 'ADVANCE_STAGE', upgrade: true});
  })



  const handleInputChange = useCallback(e => {
    dispatch(e.target);
  })

  return (
    <Box pr={5} pl={5}>
      <Text
        fontSize={4}
        children="Add your information below to get started."
        textAlign="center"
        mb={4}
      />
      <Flex mb={4} mx={-2}>
        <Box width={1/2} px={2}>
          <FormInput
            label="Event Name"
            value={state.eventName || ''}
            placeholder="Required"
            name="eventName"
            hint="Hurrican Relief Food Drive, Varsity Volleyball Tryouts"
            onChange={handleInputChange}
          />
        </Box>
        <Box width={1/2} px={2}>
          <FormInput
            label="Keywords (for image searches)"
            value={state.keywords || ''}
            placeholder="Volleyball, Patterns, Blue, Birthday Party"
            name="keywords"
            hint="What word(s) should we use to search for images."
            onChange={handleInputChange}
          />
        </Box>
      </Flex>

      <Text
        textAlign="left"
        fontSize={3}
        mb={1}
        color="dark"
        children="What should someone know about the event?"
      />
      <Text
        textAlign="left"
        fontSize={0}
        color="dark"
        style={{fontStyle: 'italic'}}
        mb={3}
        children="Only complete the relevant fields and don't worry about layout during this stage."
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
        children="Next Stage"
      />

    </Box>
  )
}

export default ContentForm;