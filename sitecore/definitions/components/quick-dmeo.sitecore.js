import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "quick-dmeo",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "bgImage_object_1633015453191",
      type: CommonFieldTypes.Image,
      standardValue: ""
    }, {
      name: "bgImage_object_1633015457655",
      type: CommonFieldTypes.Image,
      standardValue: ""
    }, {
      name: "text_string_1633015467353",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "HEADER"
    }, {
      name: "text_string_1633015482489",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual."
    }, {
      name: "href_object_1633015500993",
      type: CommonFieldTypes.GeneralLink,
      standardValue: "#"
    }, {
      name: "bgImage_object_1633015813218",
      type: CommonFieldTypes.Image,
      standardValue: ""
    }]
  });
}
