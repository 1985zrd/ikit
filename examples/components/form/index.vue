<template>
  <div>
    <!-- <FormLinkage></FormLinkage> -->
    <DynamicCheckForm></DynamicCheckForm>
    <HorizontalLandingForm></HorizontalLandingForm>
    <layoutForm></layoutForm>
    <CustomCheckForm></CustomCheckForm>
    <ProcessFormDataYourselfForm></ProcessFormDataYourselfForm>
    <SearchForm></SearchForm>
    <CustomForm></CustomForm>
    <DynamicForm></DynamicForm>
    <PopUpNewForm></PopUpNewForm>
    <DataStorageForm></DataStorageForm>
    <DataStorageVuxForm></DataStorageVuxForm>
    <LoginBoxForm></LoginBoxForm>
    <RegisterNewUser></RegisterNewUser>
    <TimeClassForm></TimeClassForm>
    <OtherTypesForm></OtherTypesForm>
    <MarkdownRender mdFileName="form" />
  </div>
</template>
<script>
// import FormLinkage from './componentCollection/formLinkage'
import DynamicCheckForm from './componentCollection/dynamicCheckForm'
import HorizontalLandingForm from './componentCollection/horizontalLandingForm'
import layoutForm from './componentCollection/layoutForm'
import CustomCheckForm from './componentCollection/customCheckForm'
import ProcessFormDataYourselfForm from './componentCollection/processFormDataYourselfForm'
import SearchForm from './componentCollection/searchForm'
import CustomForm from './componentCollection/customForm'
import DynamicForm from './componentCollection/dynamicForm'
import PopUpNewForm from './componentCollection/popUpNewForm'
import DataStorageForm from './componentCollection/dataStorageForm'
import DataStorageVuxForm from './componentCollection/dataStorageVuxForm'
import LoginBoxForm from './componentCollection/loginBoxForm'
import RegisterNewUser from './componentCollection/registerNewUser'
import TimeClassForm from './componentCollection/timeClassForm'
import OtherTypesForm from './componentCollection/otherTypesForm'
export default {
  name: 'formDemo',
  components: {
    // FormLinkage,
    DynamicCheckForm,
    HorizontalLandingForm,
    layoutForm,
    CustomCheckForm,
    ProcessFormDataYourselfForm,
    SearchForm,
    CustomForm,
    DynamicForm,
    PopUpNewForm,
    DataStorageForm,
    DataStorageVuxForm,
    LoginBoxForm,
    RegisterNewUser,
    TimeClassForm,
    OtherTypesForm
  }
}
</script>
