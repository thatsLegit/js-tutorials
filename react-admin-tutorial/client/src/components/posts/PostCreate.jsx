import React from 'react';
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostCreate = props => {
  return (
    <Create title="Create a post" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="body" multiline />
        <DateInput source="postedAt" label="Posted at" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
