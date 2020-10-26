import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Formik,Form, Field} from 'formik'


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: '25ch',
    display: "flex",
    flexDirection: "column",
    

  },
  container: {
    marginTop: "4px",
    marginBottom:"20px"
  },
  error:{
    color:"red",
    
  }
}));
const initialValues ={
  CustomerID : ""
}

const Input = ({giveRecomadations}) => {
  const classes = useStyles();
  return (
    <div >
      <Formik
        initialValues={initialValues}
        onSubmit ={(values, props)=>{
            console.log("check props",props)
            console.log("check values",values)
            giveRecomadations(props)
            props.resetForm()
        }}
      >
        {props => (
      <Form autoCapitalize autoComplete='off' className={classes.root}>
      <Field id="outlined-basic" name = "CustomerID" label="Customer ID" variant="outlined" as={TextField} fullWidth/>
      <Button variant="contained"  type="submit" color="primary" style={{ margin:10}} >
        Submit
      </Button>
    </Form>
        )}
    </Formik>
    </div>
  );
}

export default Input;
