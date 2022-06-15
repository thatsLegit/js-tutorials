import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostEdit = props => {
  return (
    <Edit title="Edit post" {...props}>
      <SimpleForm>
        <TextInput disabled source="title" />
        <TextInput source="body" multiline />
        <DateInput source="postedAt" label="Posted at" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
