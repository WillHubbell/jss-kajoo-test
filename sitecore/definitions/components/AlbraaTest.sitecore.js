import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "AlbraaTest",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "image_1631645443221",
      type: CommonFieldTypes.Image
    }, {
      name: "header_1631645461910",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "paragraph_1631645474848",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "button_1631645481243",
      type: CommonFieldTypes.SingleLineText
    }]
  });
}
