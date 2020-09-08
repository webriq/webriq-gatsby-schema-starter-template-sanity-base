import S from "@sanity/desk-tool/structure-builder";
import { FaFile } from "react-icons/fi";

import EditIcon from "part:@sanity/base/edit-icon";
import EyeIcon from "part:@sanity/base/eye-icon";

export default S.listItem()
  .title("Pages")
  .child(
    S.list()
      .title("Pages")
      .items([
        S.listItem()
          .title("About")
          .child(
            S.editor()
              .id("aboutPage")
              .schemaType("page")
              .documentId("about")
              .views([
                S.view.form().icon(EditIcon),
              ]),
          )
          .icon(FaFile),
        S.listItem()
          .title("Contact")
          .child(
            S.editor()
              .id("contactPage")
              .schemaType("page")
              .documentId("contact")
              .views([
                S.view.form().icon(EditIcon),
              ]),
          )
          .icon(FaFile),
      ]),
  );
