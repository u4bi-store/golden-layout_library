var config = {
		settings: {
        /* 디폴트 셋업값
        hasHeaders: true,
        constrainDragToContainer: true,
        reorderEnabled: true,
        selectionEnabled: false,
        popoutWholeStack: false,
        blockedPopoutsThrowError: true,
        closePopoutsOnUnload: true,
        showPopoutIcon: true,
        showMaximiseIcon: true,
        showCloseIcon: true
        
            https://www.golden-layout.com/docs/Config.html
        */
        showPopoutIcon: false, /* 팝업 버튼 비활성화*/
        // showCloseIcon: false /* 닫기 버튼 비활성화*/
		},
      labels: {
      close: '닫기',
      maximise: '최대화',
      minimise: '최소화',
      popout: '새창에서 열기'
    },
		dimensions: {
			borderWidth: 10, /* 컴포넌트간의 보더 간격*/
      headerHeight: 30 /* 헤더와 컴포넌트간의 간격*/
		},
		content: [{
			type: 'row', /* 메인*/
			content:
          [
            {
				      type: 'column', /* 메인안에 첫번째 컬럼을 줌*/
				      width: 30,
				      content:
                [   /* 그안의 콘텐츠 속성을 지정해줌*/
                    {
					              type: 'component',
					              componentName: '첫번째 컬럼'
				            }
                ]
			      },
            {
				      type: 'column', /* 메인안에 두번째 컬럼을 줌*/
				      width: 70,
				      content:
                  [   /* 그안의 콘텐츠 속성을 지정해줌*/
                      {
					                type: 'component', /* 메인안에 두번째 컬럼의 높이 40정도를 컴포넌트로 지정함*/
					                componentName: '두번째 컬럼의 컴포넌트',
					                height: 40
				              },
                      /* 하나의 노드를 더 만들어냄*/                    
                      {
					                type: 'row', /* 메인안의 두번째 컬럼의 높이 60정도 남은 부분에 로우의 타입을 줌*/
					                content:
                            [ /* 그안의 콘텐츠 속성을 지정해줌*/
                                {
                                    type: 'component', /* 로우안에 첫번째 컴포넌트를 지정해줌*/
                                    componentName: '두번째 컬럼에 있는 로우의 첫번째 컴포넌트',
                                    height: 50,
                                    componentState: { color: '#1D84BD' },
                                    isClosable: false /* 아이템 셋업 닫기가 가능한지 @ false 비활성*/
                                },
                                {
                                    type: 'component', /* 로우안에 두번째 컴포넌트를 지정해줌*/
                                    componentName: '두번째 컬럼에 있는 로우의 두번째 컴포넌트',
                                    height: 50,
                                    componentState: { color: '#F15C25' },
                                    isClosable: false /* 아이템 셋업 닫기가 가능한지 @ false 비활성*/
                                }
                            ]
				              }
                  ]
			      }
        ]
		}]
	};

var myLayout = new GoldenLayout(config);

myLayout.registerComponent('첫번째 컬럼', function(container, state) {});

myLayout.registerComponent('두번째 컬럼의 컴포넌트', function(container, state) {});
myLayout.registerComponent('두번째 컬럼에 있는 로우의 첫번째 컴포넌트', function(container, state) {
  container.getElement().css('background-color', state.color);
});
myLayout.registerComponent('두번째 컬럼에 있는 로우의 두번째 컴포넌트', function(container, state) {
  container.getElement().css('background-color', state.color);
});

myLayout.init();