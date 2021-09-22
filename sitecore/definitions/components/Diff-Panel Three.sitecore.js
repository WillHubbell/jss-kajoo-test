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
    }, {
      name: "text_string_1632330596104",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "list_list_1632330659163",
      type: CommonFieldTypes.ContentList
    }, {
      name: "src_object_1632331042506",
      type: CommonFieldTypes.ItemLink
    }, {
      name: "list_list_1632331356799",
      type: CommonFieldTypes.ContentList
    }, {
      name: "text_string_1632331356799",
      type: CommonFieldTypes.SingleLineText
    }]
  });
}
