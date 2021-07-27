import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Diff-Panel",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "header_0",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "button_1",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "image_3",
      type: CommonFieldTypes.Image
    }, {
      name: "paragraph_1627061563664",
      type: CommonFieldTypes.SingleLineText
    }]
  });
}
