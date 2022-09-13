import * as Yup from "yup";

const SurveyValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Your first name has to include a minimum of 3 characters.')
    .max(40, 'Your first name cannot be longer than 40 characters.')
    .required('This is a required field.'),
  lastName: Yup.string()
    .min(3, 'Your last name has to include a minimum of 3 characters.')
    .max(40, 'Your last name cannot be longer than 40 characters.')
    .required('This is a required field.'),
  studentId: Yup.string()
    .required('This is a required field.')
    .matches(
      /^\d{3}-\d{2}-\d{3}$/,
      'Your Student ID has to be in the format xxx-xx-xxx.',
    ),
  email: Yup.string()
    .email('This email address is invalid.')
    .required('This is a required field.'),
  supervisor: Yup.string()
    .required('Your supervisor must be selected.'),
  moduleFeedback: Yup.array()
    .of(Yup.object().shape({
      feedback: Yup.string().required('This is a required field.'),
    })),
});

export default SurveyValidationSchema;