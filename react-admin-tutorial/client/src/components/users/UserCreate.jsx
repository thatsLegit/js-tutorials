import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const PostCreate = props => {
  return (
    <Create title="Create a user" {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
