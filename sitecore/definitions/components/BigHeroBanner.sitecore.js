import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "BigHeroBanner",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "bgImage_object_1633107582833",
      type: CommonFieldTypes.Image,
      standardValue: ""
    }, {
      name: "text_string_1633107911113",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "HEADER"
    }, {
      name: "text_string_1633107981461",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "HEADER"
    }]
  });
}
