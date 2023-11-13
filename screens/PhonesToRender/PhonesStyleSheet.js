import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    width: "100%",
    padding: 20,
    backgroundColor: "#F6F6F6",
  },
  scrollView: {
    flexDirection: "row",
  },
  scrollView_item: {
    marginRight: 20,
    alignItems: "center",
    width: 150,
    borderRadius: 30,
    padding: 5,
  },
  scrollView_itemText: {
    fontSize: 14,
    color: "#7F7F7F",
  },
  white: {
    color: "white",
  },
  active: {
    backgroundColor: "#0ACF83",
  },
});
