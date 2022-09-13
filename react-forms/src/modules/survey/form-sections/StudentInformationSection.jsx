import React from 'react';
import { Field } from 'formik';
import { Card, CardContent, Stack, Typography, FormControl, TextField } from '@mui/material';
import { Item, Heading } from '../StyledComponents';
import MuiFormikInputWithHooks from '../../../shared/components/fields/mui-formik-fields/MuiFormikInputWithHooks';
import MuiFormikInput from '../../../shared/components/fields/mui-formik-fields/MuiFormikInput';

const StudentInformationSection = ({ values, handleChange, handleBlur, errors, touched }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Heading>
          <Typography variant="h4" component="div">
            Student Information
          </Typography>
        </Heading>
        <Stack>
          <Item>
            <FormControl fullWidth>
              <TextField
                name="firstName"
                label="First Name"
                variant="outlined"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
            </FormControl>
          </Item>
          <Item>
            <Field
              name="lastName"
              label="Last Name"
              component={MuiFormikInput}
            />
          </Item>
          <Item>
            <Field
              name="studentId"
              label="Student ID"
              component={MuiFormikInput}
            />
          </Item>
          <Item>
            <MuiFormikInputWithHooks
              name="email"
              type="email"
              label="Email"
            />
          </Item>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default StudentInformationSection;