import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Hero-Banner",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "bgImage_object_1632758615916",
      type: CommonFieldTypes.Image
    }, {
      name: "bgImage_object_1632762558520",
      type: CommonFieldTypes.Image
    }, {
      name: "text_string_1632762602924",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "href_object_1632762638631",
      type: CommonFieldTypes.GeneralLink
    }]
  });
}
