import S from "@sanity/desk-tool/structure-builder";
import EditIcon from "part:@sanity/base/edit-icon";
import EyeIcon from "part:@sanity/base/eye-icon";

export default S.listItem()
  .id("projects")
  .schemaType("project")
  .title("Projects")
  .child(
    S.documentTypeList("project")
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType("project")
          .views([
            S.view.form().icon(EditIcon),
          ])
      ),
  );
