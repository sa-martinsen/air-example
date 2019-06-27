import {stream} from "m2"

export default () => stream(emt => {
  emt([{
    desktop: true,
    iPad: false,
    desktopA: true,
  }]);

  setTimeout( () => {

    emt([{
      desktop: true,
      iPad: false,
      desktopA: false,
    }]);

  }, 5000 );

});