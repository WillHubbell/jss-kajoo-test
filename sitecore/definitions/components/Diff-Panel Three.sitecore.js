import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Diff-Panel Three",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "text_string_0",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "text_string_1",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "link_link_1",
      type: CommonFieldTypes.GeneralLink
    }, {
      name: "src_object_3",
      type: CommonFieldTypes.Image
    }]
  });
}
