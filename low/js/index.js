var config = {
  content: [{
    type: 'row',
    content: [
        {
        type:'component',
        componentName: 'basic_low',
        componentState: { text: '컨테이너 1번' }
        },
      {
        type:'component',
        componentName: 'basic_low',
        componentState: { text: '컨테이너 2번' }
        },
      {
        type:'component',
        componentName: 'basic_low',
        componentState: { text: '컨테이너 3번' }
        }
    ]
  }]
};

var myLayout = new GoldenLayout( config );

myLayout.registerComponent( 'basic_low', function( container, state ){
  container.getElement().html( '<h2>' + state.text + '</h2>');
});