// prettier-ignore
/* eslint-disable */
import React from 'react';
import { Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';

const react$h = (props) => {
  return React.createElement('button', { className: props.className }, [
    Text({ field: props.fields, editable: true }),
  ]);
};

const react$g = (props) => {
  return React.createElement('div', { className: props.className }, [
    React.createElement('input', { type: 'checkbox', checked: 'true' }),
  ]);
};

const react$f = (props) => {
  return React.createElement('div', { className: props.className });
};

function StarIcon(props) {
  const { fill } = props;
  return React.createElement(
    'svg',
    {
      class: 'w-6 h-6',
      style: { width: '30px', height: '30px' },
      fill: fill,
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    [
      React.createElement('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
      }),
    ]
  );
}
function RatingIcon(props) {
  const { index, rating, hoverRating, onMouseEnter, onMouseLeave, onSaveRating } = props;
  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return 'yellow';
    } else if (!hoverRating && rating >= index) {
      return 'yellow';
    }
    return 'none';
  }, [rating, hoverRating, index]);
  return React.createElement(
    'div',
    {
      className: 'cursor-pointer',
      onMouseEnter: () => onMouseEnter(index),
      onMouseLeave: () => onMouseLeave(),
      onClick: () => onSaveRating(index),
    },
    [StarIcon({ fill: fill })]
  );
}
const Rating = (props) => {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };
  return React.createElement('div', { className: 'box flex ' + props.className }, [
    [1, 2, 3, 4, 5].map((index) => {
      return RatingIcon({
        index: index,
        rating: rating,
        hoverRating: hoverRating,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onSaveRating: onSaveRating,
      });
    }),
  ]);
};

const react$e = (props) => {
  if (props.field && props.field.editable) {
    return React.createElement('div', {
      className: props.className,
      dangerouslySetInnerHTML: { __html: props.field.editable },
    });
  } else {
    if (!props.field) {
      return React.createElement('div', { className: props.className });
    } else {
      return React.createElement('div', { className: props.className }, [props.field.value]);
    }
  }
};

const react$d = (props) => {
  return React.createElement('div', { style: props.style }, [
    React.createElement('input', {
      className: 'react-switch-checkbox',
      id: 'react-switch-new',
      type: 'checkbox',
    }),
    React.createElement('label', { className: 'react-switch-label', htmlFor: 'react-switch-new' }, [
      React.createElement('span', { className: 'react-switch-button' }),
    ]),
  ]);
};

const react$c = (props) => {
  return props.field
    ? Image({
        className: props.className,
        field: props.field,
        editable: true,
        height: props.field.value.height,
        width: props.field.value.width,
      })
    : null;
};

const react$b = (props) => {
  return Link({ field: props.field, className: props.className, editable: true });
};

const react$a = (props) => {
  return React.createElement('div', { className: props.className }, [
    React.createElement('input', { type: 'radio', name: 'radio' }),
  ]);
};

const react$9 = (props) => {
  if (props.field && props.field.editable) {
    return React.createElement('div', {
      className: props.className,
      dangerouslySetInnerHTML: { __html: props.field.editable },
    });
  } else {
    if (!props.field) {
      return React.createElement('div', { className: props.className });
    } else {
      return React.createElement('div', { className: props.className }, [props.field.value]);
    }
  }
};

const react$8 = (props) => {
  return React.createElement('textarea', { className: props.className, value: 'Text area' });
};

const react$7 = (props) => {
  return React.createElement('input', {
    className: props.className,
    type: 'text',
    value: 'Text Input',
  });
};

const react$6 = (props) => {
  if (props.field && props.field.editable) {
    return React.createElement('div', {
      className: props.className,
      dangerouslySetInnerHTML: { __html: props.field.editable },
    });
  } else {
    if (!props.field) {
      return React.createElement('div', { className: props.className });
    } else {
      return React.createElement('div', { className: props.className }, [
        React.createElement('video', { src: props.field.value.src, controls: true }),
      ]);
    }
  }
};

const react$5 = () => {
  return React.createElement('hr', { style: { width: '100%' } });
};

const react$4 = (props) => {
  const bgcolor = 'orange';
  const completed = 45;
  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return React.createElement('div', { className: props.className, style: containerStyles }, [
    React.createElement('div', { style: fillerStyles }, [
      React.createElement('span', { style: labelStyles }, [`${completed}%`]),
    ]),
  ]);
};

const react$3 = (props) => {
  if (props.field && props.field.editable) {
    return React.createElement('div', {
      className: props.className,
      dangerouslySetInnerHTML: { __html: props.field.editable },
    });
  } else {
    if (!props.field) {
      return React.createElement('div', { className: props.className });
    } else {
      return React.createElement('div', { className: props.className }, [props.field.value]);
    }
  }
};

const react$2 = (props) => {
  return React.createElement('div', { style: props.style }, [
    React.createElement('input', {
      style: { padding: '0px' },
      type: 'range',
      min: '1',
      max: '100',
      value: '50',
      className: 'slider',
      id: 'myRange',
      readOnly: true,
    }),
  ]);
};

const react$1 = (props) => {
  return React.createElement('div', { className: 'dropdown', style: props.style }, [
    React.createElement(
      'button',
      { className: 'dropbtn', style: { width: '100%', height: '100%' } },
      ['Dropdown']
    ),
    React.createElement('div', { className: 'dropdown-content' }, [
      React.createElement('a', { href: '#' }, ['Link 1']),
      React.createElement('a', { href: '#' }, ['Link 2']),
    ]),
  ]);
};

const react = (props) => {
  if (props.field && props.field.editable) {
    return React.createElement('li', {
      className: props.className,
      dangerouslySetInnerHTML: { __html: props.field.editable },
    });
  } else {
    if (!props.field) {
      return React.createElement('li', { className: props.className });
    } else {
      return React.createElement('li', { className: props.className }, [props.field.value]);
    }
  }
};

export {
  react$h as Button,
  react$g as Checkbox,
  react$f as Container,
  react$1 as Dropdown,
  react$e as Header,
  react$c as Image,
  react$9 as Label,
  react$5 as Linebreak,
  react$b as Link,
  react as List,
  react$3 as Paragraph,
  react$4 as Progressbar,
  react$a as Radiobutton,
  Rating,
  react$2 as Slider,
  react$8 as Textarea,
  react$7 as Textinput,
  react$d as Toggle,
  react$6 as Video,
};
