import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Hero-Banner Test",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "image_1630513440790",
      type: CommonFieldTypes.Image
    }, {
      name: "header_1630514029029",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "paragraph_1630514047980",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "button_1630514059359",
      type: CommonFieldTypes.SingleLineText
    }]
  });
}
