import React from 'react';
import { Card, CardContent, Stack, IconButton, Grid, Typography } from '@mui/material';
import { Item, Heading } from '../StyledComponents';
import Forms from '../../../constants/Forms';
import { Field, FieldArray, useFormikContext } from 'formik';
import Close from '@mui/icons-material/Close';
import MuiFormikInput from '../../../shared/components/fields/mui-formik-fields/MuiFormikInput';
import MuiFormikSlider from '../../../shared/components/fields/mui-formik-fields/MuiFormikSlider';

const ModuleReviewSection = () => {
  const { values, setFieldValue } = useFormikContext();
  const { moduleFeedback } = values;

  const removeModule = (arrIndex) => {
    const updatedModuleFeedback = moduleFeedback.filter((feedback, index) => index !== arrIndex);
    setFieldValue('moduleFeedback', updatedModuleFeedback);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Heading>
          <Typography variant="h4" component="div">
            Module Review
          </Typography>
        </Heading>
        <Stack>
          <FieldArray
            name="moduleFeedback"
            render={() => (
              <>
                {moduleFeedback.map((feedback, index) => {
                  const currentModule = Forms.modules.find((option) => option.value === feedback.module);
                  return (
                    <Item key={index}>
                      <Stack spacing={4}>
                        <Grid container justifyContent="space-between">
                          <Typography variant="h6" component="div">
                            {currentModule.label}
                          </Typography>
                          <IconButton 
                            size="small"
                            onClick={() => removeModule(index)}
                          >
                            <Close />
                          </IconButton>
                        </Grid>
                        <Field
                          name={`moduleFeedback.${index}.rating`}
                          label="Module delivery rating"
                          step={1}
                          marks={Forms.getSliderMarks()}
                          min={0}
                          max={10}
                          component={MuiFormikSlider}
                        />
                        <Field
                          name={`moduleFeedback.${index}.feedback`}
                          label={`Feedback & Suggestions`}
                          multiline
                          minRows={4}
                          maxRows={4}
                          component={MuiFormikInput}
                        />
                      </Stack>
                    </Item>
                  );
                })}
              </>
            )}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ModuleReviewSection;