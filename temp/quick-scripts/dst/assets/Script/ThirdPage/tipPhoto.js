
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ThirdPage/tipPhoto.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc657kh48ZCHLcR2ilS9Sd7', 'tipPhoto');
// Script/ThirdPage/tipPhoto.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    prefab: {
      "default": null,
      type: cc.Prefab
    },
    upFlag: {
      "default": false,
      type: cc.Boolean,
      visible: false
    },
    posX: {
      "default": 0,
      type: cc.Integer
    },
    posY: {
      "default": 0,
      type: cc.Integer
    },
    tipKnowledgePopUpHuanDongCiShu: {
      "default": 10,
      type: cc.Integer,
      tooltip: "知识弹出按钮，缓动的次数，初始为5"
    },
    tipKnowledgePopUpHuanDongTime: {
      "default": 0.3,
      tooltip: "每次一缓动的时间，初始0.3秒"
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onStart: function onStart() {//this.parent1 = cc.find("Canvas/background/blockLayoutParent").node.getComponent("Initate");
  },
  //  点击暂停按钮
  popupPage: function popupPage() {
    var _this = this;

    //cc.log(1);
    if (this.upFlag) //已经弹出了一个
      {
        return;
      }

    this.upFlag = true;
    cc.log("生成了一个");
    var node1 = cc.instantiate(this.prefab);
    this.node.parent.addChild(node1);
    node1.scale = 0; //360.457,649.87

    node1.x = this.posX;
    node1.y = this.posY;
    cc.log(node1.x + '  ' + node1.y); //node.scale = 1;

    var scaleTo = cc.scaleTo(0.1, 1).easing(cc.easeBounceOut());
    node1.runAction(scaleTo);
    cc.find("Canvas").pauseSystemEvents(true);
    node1.on("touchstart", function (event) {
      _this.upFlag = false;
      cc.log("销毁了一个");
      node1.destroy();
      cc.find("Canvas").resumeSystemEvents(true);
    }, this);
  },
  popupPage2: function popupPage2() {
    var _this2 = this;

    //此弹出函数为 扣生命值后强制弹出专用
    //cc.log(1);
    //cc.log("This.Parent"+this.parent);
    if (this.upFlag) //已经弹出了一个
      {
        return;
      }

    var button = this.node.getComponent(cc.Button);
    button.interactable = true; //设置popUp按钮交互性

    this.upFlag = true; //cc.log("生成了一个");

    var node1 = cc.instantiate(this.prefab);
    this.node.parent.addChild(node1);
    node1.scale = 0; //360.457,649.87

    node1.x = this.posX;
    node1.y = this.posY; //cc.log(node1.x+'  '+node1.y);
    //node.scale = 1;

    var scaleTo = cc.scaleTo(0.1, 1).easing(cc.easeBounceOut());
    node1.runAction(scaleTo);
    cc.find("Canvas").pauseSystemEvents(true);
    node1.on("touchstart", function (event) {
      _this2.upFlag = false;
      cc.log("销毁了一个");
      node1.destroy();
      cc.find("Canvas").resumeSystemEvents(true);
      _this2.node.scale = 1;
      var count = 0;

      _this2.schedule(function () {
        count++;
        this.scheduleOnce(function () {
          //放大
          var scaleTo1 = cc.scaleTo(this.tipKnowledgePopUpHuanDongTime, 1.2).easing(cc.easeBounceOut());
          this.node.runAction(scaleTo1);
        }, 0);
        this.scheduleOnce(function () {
          //缩小
          var scaleTo2 = cc.scaleTo(this.tipKnowledgePopUpHuanDongTime, 1).easing(cc.easeBounceOut());
          this.node.runAction(scaleTo2);
        }, this.tipKnowledgePopUpHuanDongTime * 1.5);

        if (count == this.tipKnowledgePopUpHuanDongCiShu) //最后一次执行
          {
            button.interactable = false;
          }
      }, 3 * _this2.tipKnowledgePopUpHuanDongTime, _this2.tipKnowledgePopUpHuanDongCiShu, 0);
    }, this);
  } // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUaGlyZFBhZ2VcXHRpcFBob3RvLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicHJlZmFiIiwidHlwZSIsIlByZWZhYiIsInVwRmxhZyIsIkJvb2xlYW4iLCJ2aXNpYmxlIiwicG9zWCIsIkludGVnZXIiLCJwb3NZIiwidGlwS25vd2xlZGdlUG9wVXBIdWFuRG9uZ0NpU2h1IiwidG9vbHRpcCIsInRpcEtub3dsZWRnZVBvcFVwSHVhbkRvbmdUaW1lIiwib25TdGFydCIsInBvcHVwUGFnZSIsImxvZyIsIm5vZGUxIiwiaW5zdGFudGlhdGUiLCJub2RlIiwicGFyZW50IiwiYWRkQ2hpbGQiLCJzY2FsZSIsIngiLCJ5Iiwic2NhbGVUbyIsImVhc2luZyIsImVhc2VCb3VuY2VPdXQiLCJydW5BY3Rpb24iLCJmaW5kIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJvbiIsImV2ZW50IiwiZGVzdHJveSIsInJlc3VtZVN5c3RlbUV2ZW50cyIsInBvcHVwUGFnZTIiLCJidXR0b24iLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJpbnRlcmFjdGFibGUiLCJjb3VudCIsInNjaGVkdWxlIiwic2NoZWR1bGVPbmNlIiwic2NhbGVUbzEiLCJzY2FsZVRvMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBQztBQUNILGlCQUFRLElBREw7QUFFSEMsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkwsS0FEQztBQUtSQyxJQUFBQSxNQUFNLEVBQUM7QUFDSCxpQkFBUSxLQURMO0FBRUhGLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDUSxPQUZMO0FBR0hDLE1BQUFBLE9BQU8sRUFBQztBQUhMLEtBTEM7QUFVUkMsSUFB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b0JlLFFBQXBCO0FBQ0gsU0FIRCxFQUdFLENBSEY7QUFLQSxhQUFLRCxZQUFMLENBQWtCLFlBQVU7QUFBSTtBQUM1QixjQUFJRSxRQUFRLEdBQUc5QyxFQUFFLENBQUMyQixPQUFILENBQVcsS0FBS1osNkJBQWhCLEVBQThDLENBQTlDLEVBQWlEYSxNQUFqRCxDQUF3RDVCLEVBQUUsQ0FBQzZCLGFBQUgsRUFBeEQsQ0FBZjtBQUNBLGVBQUtSLElBQUwsQ0FBVVMsU0FBVixDQUFvQmdCLFFBQXBCO0FBQ0gsU0FIRCxFQUdFLEtBQUsvQiw2QkFBTCxHQUFtQyxHQUhyQzs7QUFLQSxZQUFHMkIsS0FBSyxJQUFJLEtBQUs3Qiw4QkFBakIsRUFBa0Q7QUFDbEQ7QUFDSXlCLFlBQUFBLE1BQU0sQ0FBQ0csWUFBUCxHQUFzQixLQUF0QjtBQUNIO0FBQ0osT0FoQkQsRUFnQkUsSUFBRSxNQUFJLENBQUMxQiw2QkFoQlQsRUFnQnVDLE1BQUksQ0FBQ0YsOEJBaEI1QyxFQWdCMkUsQ0FoQjNFO0FBbUJILEtBM0JELEVBMkJFLElBM0JGO0FBNEJILEdBM0hJLENBNEhMOztBQTVISyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHByZWZhYjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5QcmVmYWIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cEZsYWc6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OmZhbHNlLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZpc2libGU6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc1g6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OjAsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuSW50ZWdlcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc1k6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OjAsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuSW50ZWdlcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpcEtub3dsZWRnZVBvcFVwSHVhbkRvbmdDaVNodTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6MTAsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuSW50ZWdlcixcclxuICAgICAgICAgICAgdG9vbHRpcDpcIuefpeivhuW8ueWHuuaMiemSru+8jOe8k+WKqOeahOasoeaVsO+8jOWIneWni+S4ujVcIixcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0aXBLbm93bGVkZ2VQb3BVcEh1YW5Eb25nVGltZTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6MC4zLFxyXG4gICAgICAgICAgICB0b29sdGlwOlwi5q+P5qyh5LiA57yT5Yqo55qE5pe26Ze077yM5Yid5aeLMC4z56eSXCJcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgIG9uU3RhcnQgKCkge1xyXG4gICAgICAgICAgLy90aGlzLnBhcmVudDEgPSBjYy5maW5kKFwiQ2FudmFzL2JhY2tncm91bmQvYmxvY2tMYXlvdXRQYXJlbnRcIikubm9kZS5nZXRDb21wb25lbnQoXCJJbml0YXRlXCIpO1xyXG4gICAgIH0sXHJcblxyXG4gICAgLy8gIOeCueWHu+aaguWBnOaMiemSrlxyXG4gICAgcG9wdXBQYWdlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy9jYy5sb2coMSk7XHJcblxyXG5cclxuICAgICAgICBpZih0aGlzLnVwRmxhZykgIC8v5bey57uP5by55Ye65LqG5LiA5LiqXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwRmxhZyA9IHRydWU7XHJcbiAgICAgICAgY2MubG9nKFwi55Sf5oiQ5LqG5LiA5LiqXCIpO1xyXG4gICAgICAgIGxldCBub2RlMSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKG5vZGUxKTtcclxuICAgICAgICBub2RlMS5zY2FsZSA9IDA7XHJcbiAgICAgICAgLy8zNjAuNDU3LDY0OS44N1xyXG4gICAgICAgIG5vZGUxLnggPSB0aGlzLnBvc1g7XHJcbiAgICAgICAgbm9kZTEueSA9IHRoaXMucG9zWTtcclxuICAgICAgICBjYy5sb2cobm9kZTEueCsnICAnK25vZGUxLnkpO1xyXG4gICAgICAvL25vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgIGxldCBzY2FsZVRvID0gY2Muc2NhbGVUbygwLjEsMSkuZWFzaW5nKGNjLmVhc2VCb3VuY2VPdXQoKSk7XHJcbiAgICAgICAgbm9kZTEucnVuQWN0aW9uKHNjYWxlVG8pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgbm9kZTEub24oXCJ0b3VjaHN0YXJ0XCIsZXZlbnQ9PnsgICAgXHJcbiAgICAgICAgICAgIHRoaXMudXBGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIumUgOavgeS6huS4gOS4qlwiKTtcclxuICAgICAgICAgICAgbm9kZTEuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICB9LHRoaXMpO1xyXG4gICAgfSxcclxuICAgIHBvcHVwUGFnZTI6ZnVuY3Rpb24oKXsgICAgLy/mraTlvLnlh7rlh73mlbDkuLog5omj55Sf5ZG95YC85ZCO5by65Yi25by55Ye65LiT55SoXHJcbiAgICAgICAvL2NjLmxvZygxKTtcclxuICAgICAgIC8vY2MubG9nKFwiVGhpcy5QYXJlbnRcIit0aGlzLnBhcmVudCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudXBGbGFnKSAgLy/lt7Lnu4/lvLnlh7rkuobkuIDkuKpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBidXR0b24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7Ly/orr7nva5wb3BVcOaMiemSruS6pOS6kuaAp1xyXG5cclxuICAgICAgICB0aGlzLnVwRmxhZyA9IHRydWU7XHJcbiAgICAgICAgLy9jYy5sb2coXCLnlJ/miJDkuobkuIDkuKpcIik7XHJcbiAgICAgICAgbGV0IG5vZGUxID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQobm9kZTEpO1xyXG4gICAgICAgIG5vZGUxLnNjYWxlID0gMDtcclxuICAgICAgICAvLzM2MC40NTcsNjQ5Ljg3XHJcbiAgICAgICAgbm9kZTEueCA9IHRoaXMucG9zWDtcclxuICAgICAgICBub2RlMS55ID0gdGhpcy5wb3NZO1xyXG4gICAgICAgIC8vY2MubG9nKG5vZGUxLngrJyAgJytub2RlMS55KTtcclxuICAgICAgICAvL25vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgIGxldCBzY2FsZVRvID0gY2Muc2NhbGVUbygwLjEsMSkuZWFzaW5nKGNjLmVhc2VCb3VuY2VPdXQoKSk7XHJcbiAgICAgICAgbm9kZTEucnVuQWN0aW9uKHNjYWxlVG8pO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgIG5vZGUxLm9uKFwidG91Y2hzdGFydFwiLGV2ZW50PT57ICAgIFxyXG4gICAgICAgICAgICB0aGlzLnVwRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5sb2coXCLplIDmr4HkuobkuIDkuKpcIik7XHJcbiAgICAgICAgICAgIG5vZGUxLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXsgICAvL+aUvuWkp1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZVRvMSA9IGNjLnNjYWxlVG8odGhpcy50aXBLbm93bGVkZ2VQb3BVcEh1YW5Eb25nVGltZSwxLjIpLmVhc2luZyhjYy5lYXNlQm91bmNlT3V0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oc2NhbGVUbzEpO1xyXG4gICAgICAgICAgICAgICAgfSwwKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7ICAgLy/nvKnlsI9cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGVUbzIgPSBjYy5zY2FsZVRvKHRoaXMudGlwS25vd2xlZGdlUG9wVXBIdWFuRG9uZ1RpbWUsMSkuZWFzaW5nKGNjLmVhc2VCb3VuY2VPdXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihzY2FsZVRvMik7XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMudGlwS25vd2xlZGdlUG9wVXBIdWFuRG9uZ1RpbWUqMS41KVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGNvdW50ID09IHRoaXMudGlwS25vd2xlZGdlUG9wVXBIdWFuRG9uZ0NpU2h1KSAgLy/mnIDlkI7kuIDmrKHmiafooYxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sMyp0aGlzLnRpcEtub3dsZWRnZVBvcFVwSHVhbkRvbmdUaW1lLHRoaXMudGlwS25vd2xlZGdlUG9wVXBIdWFuRG9uZ0NpU2h1LDApO1xyXG5cclxuXHJcbiAgICAgICAgfSx0aGlzKTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19