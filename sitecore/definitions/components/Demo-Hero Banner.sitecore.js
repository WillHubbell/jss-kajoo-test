import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Demo-Hero Banner",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "bgImage_object_1632853324287",
      type: CommonFieldTypes.Image,
      standardValue: ""
    }, {
      name: "bgImage_object_1632853328540",
      type: CommonFieldTypes.Image,
      standardValue: ""
    }, {
      name: "bgImage_object_1632924845475",
      type: CommonFieldTypes.Image,
      standardValue: ""
    }, {
      name: "bgImage_object_1632924850070",
      type: CommonFieldTypes.Image,
      standardValue: ""
    }, {
      name: "bgImage_object_1632924888050",
      type: CommonFieldTypes.Image,
      standardValue: ""
    }, {
      name: "text_string_1632924912094",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "HEADER"
    }, {
      name: "text_string_1632924929060",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual."
    }, {
      name: "href_object_1632924966404",
      type: CommonFieldTypes.GeneralLink,
      standardValue: "#"
    }]
  });
}
