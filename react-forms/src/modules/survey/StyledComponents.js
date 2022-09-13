import { styled } from '@mui/material';

const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  paddingBottom: theme.spacing(3),
  paddingTop: theme.spacing(3),
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  color: theme.palette.text.secondary,
  borderBottom: '1px solid',
  borderBottomColor: 'rgba(200, 200, 200, .6)',
}));

const Heading = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  paddingTop: theme.spacing(3),
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  color: theme.palette.text.primary,
}));

const MainHeading = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  color: theme.palette.text.primary,
}));

const Subtitle = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const Floating = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  margin: 0,
  top: 'auto',
  right: 40,
  bottom: 40,
  left: 'auto',
  position: 'fixed',
}));

export {
  Item,
  Heading,
  MainHeading,
  Subtitle,
  Floating,
}