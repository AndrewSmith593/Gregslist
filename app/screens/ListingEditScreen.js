import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "tomato", icon: "apps" },
  { label: "Cars", value: 2, backgroundColor: "#FAA95E", icon: "cars" },
  { label: "Cameras", value: 3, backgroundColor: "#FED658", icon: "cameras" },
  { label: "Games", value: 4, backgroundColor: "#6FD296", icon: "games" },
  { label: "Clothing", value: 5, backgroundColor: "#65C6C5", icon: "clothing" },
  { label: "Sports", value: 6, backgroundColor: "#66B0F4", icon: "sports" },
  { label: "Movies & Music", value: 7, backgroundColor: "#5C8AEF", icon: "moviesAndMusic" },
  { label: "Books", value: 8, backgroundColor: "#A77DEB", icon: "books" },
  { label: "Other", value: 9, backgroundColor: "#8697AF", icon: "other" },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          placeholder="Category"
          width="55%"
          PickerItemComponent={CategoryPickerItem}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
