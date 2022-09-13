import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { 
  Box, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  Stack, 
  Typography, 
  Fab, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions 
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { MainHeading, Subtitle, Floating } from './StyledComponents';
import SurveyValidationSchema from './SurveyValidationSchema';
import Forms from '../../constants/Forms';
import StudentInformationSection from './form-sections/StudentInformationSection';
import ModuleReviewSection from './form-sections/ModuleReviewSection';
import OverallEvaluationSection from './form-sections/OverallEvaluationSection';

const SurveyContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [response, setResponse] = useState(null);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleReset = (resetForm) => {
    setResponse(null);
    resetForm();
  };

  const handleSubmit = (values) => {
    setResponse(JSON.stringify(values, null, 2))
    handleModalOpen();
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    studentId: '',
    email: '',
    supervisor: '',
    supervisorRating: 5,
    meetingPreference: Forms.meetingPreferenceOptions[0].value,
    generalSuggestions: '',
    moduleFeedback: Forms.moduleFeedback
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Formik
          initialValues={initialValues}
          validationSchema={SurveyValidationSchema}
          validateOnChange={false}
          validateOnBlur
          onSubmit={handleSubmit}
        >
        {({ dirty, resetForm, values, handleChange, handleBlur, errors, touched }) => (
          <Form noValidate>
            <Grid container spacing={3}>

              <Grid item xs={12}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent 
                    className="d-flex align-items-center justify-content-between"
                  >
                    <MainHeading>
                      <Typography variant="h2" component="div">
                        Supervisor Evaluation Survey
                      </Typography>
                      <Subtitle>
                        <Typography 
                          variant="subtitle1"
                          component="div"
                        >
                          Please evaluate your experience with your 
                          project supervisor and the delivery of their 
                          respective modules.
                        </Typography>
                      </Subtitle>
                    </MainHeading>
                    
                    <Button 
                      color="info" 
                      variant="outlined" 
                      size="medium" 
                      onClick={() => handleReset(resetForm)}
                    >
                      Reset
                    </Button>

                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Stack spacing={3}>
                  <StudentInformationSection 
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  <ModuleReviewSection />
                </Stack>
              </Grid>

              <Grid item xs={6}>
                <Stack spacing={3}>
                  <OverallEvaluationSection />
                </Stack>
              </Grid>
            </Grid>

            <Floating>
              <Fab 
                color="primary" 
                variant="extended" 
                size="large" 
                type="submit" 
                disabled={!dirty}
              >
                Submit
                <SendIcon sx={{ ml: 1 }} />
              </Fab>
            </Floating>

          </Form>
        )}
        </Formik>
      </Box>

      <Dialog
        open={isModalOpen}
        fullWidth
        maxWidth="sm"
        scroll="paper"
        onClose={handleModalClose}
      >
        <DialogTitle>Your Response</DialogTitle>
        <DialogContent dividers className="modal-content">
          <pre>{response}</pre>
        </DialogContent>
        <DialogActions>
          <Button 
            autoFocus 
            onClick={handleModalClose}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>

    </>
  );
}

export default SurveyContainer;