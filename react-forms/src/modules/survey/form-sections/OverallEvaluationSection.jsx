import React from 'react';
import { Field } from 'formik';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { Item, Heading } from '../StyledComponents';
import MuiFormikInput from '../../../shared/components/fields/mui-formik-fields/MuiFormikInput';
import MuiFormikSelect from '../../../shared/components/fields/mui-formik-fields/MuiFormikSelect';
import MuiFormikSlider from '../../../shared/components/fields/mui-formik-fields/MuiFormikSlider';
import MuiFormikRadio from '../../../shared/components/fields/mui-formik-fields/MuiFormikRadio';
import Forms from '../../../constants/Forms';

const OverallEvaluationSection = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Heading>
          <Typography variant="h4" component="div">
            Overall Evaluation and Suggestions
          </Typography>
        </Heading>
        <Stack>
          <Item>
            <Field
              name="supervisor"
              label="Select your Supervisor"
              fullWidth
              options={Forms.supervisorOptions}
              component={MuiFormikSelect}
            />
          </Item>
          <Item>
            <Field
              name="supervisorRating"
              label="Overall Rating"
              step={1}
              marks={Forms.getSliderMarks()}
              min={0}
              max={10}
              component={MuiFormikSlider}
            />
          </Item>
          <Item>
            <Field 
              name="meetingPreference"
              options={Forms.meetingPreferenceOptions}
              label="Meeting Preference"
              component={MuiFormikRadio}
            />
          </Item>
          <Item>
            <Field
              name="generalSuggestions"
              label="General Suggestions"
              multiline
              minRows={4}
              maxRows={4}
              component={MuiFormikInput}
            />
          </Item>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default OverallEvaluationSection;