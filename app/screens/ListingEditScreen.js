import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import listingsApi from "../api/listings";
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "tomato",
    icon: "chair-rolling",
  },
  { label: "Cars", value: 2, backgroundColor: "#FAA95E", icon: "car" },
  { label: "Cameras", value: 3, backgroundColor: "#FED658", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "#6FD296", icon: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#65C6C5",
    icon: "tshirt-crew",
  },
  { label: "Sports", value: 6, backgroundColor: "#66B0F4", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#5C8AEF",
    icon: "movie-open",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "#A77DEB",
    icon: "book-open-page-variant",
  },
  {
    label: "Other",
    value: 9,
    backgroundColor: "#8697AF",
    icon: "shape-outline",
  },
];

function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing.");
    }
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
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
          width="60%"
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
