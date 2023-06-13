import { customSharps } from "./CustomSharps";
function InitData() {
    const width = 50;
    const height = 50;
    const commonAttrs = {
        body: {
            // fill: '#fff',
            // stroke: '#8f8f8f',
            // strokeWidth: 1,
        },
    }
    const ports = {
        groups: {
            top: {
                position: 'top',
                attrs: {
                    circle: {
                        r: 4,
                        magnet: true,
                        stroke: '#5F95FF',
                        strokeWidth: 1,
                        fill: '#fff',
                        style: {
                            visibility: 'hidden',
                        },
                    },
                },
            },
            right: {
                position: 'right',
                attrs: {
                    circle: {
                        r: 4,
                        magnet: true,
                        stroke: '#5F95FF',
                        strokeWidth: 1,
                        fill: '#fff',
                        style: {
                            visibility: 'hidden',
                        },
                    },
                },
            },
            bottom: {
                position: 'bottom',
                attrs: {
                    circle: {
                        r: 4,
                        magnet: true,
                        stroke: '#5F95FF',
                        strokeWidth: 1,
                        fill: '#fff',
                        style: {
                            visibility: 'hidden',
                        },
                    },
                },
            },
            left: {
                position: 'left',
                attrs: {
                    circle: {
                        r: 4,
                        magnet: true,
                        stroke: '#5F95FF',
                        strokeWidth: 1,
                        fill: '#fff',
                        style: {
                            visibility: 'hidden',
                        },
                    },
                },
            },
        },
        items: [
            {
                group: 'top',
            },
            {
                group: 'right',
            },
            {
                group: 'bottom',
            },
            {
                group: 'left',
            },
        ],
    }

    const customNodes = [
        {
            shape: 'circle',
            label: 'start',
            width,
            height,
            attrs: {
                body: {
                    ...commonAttrs.body,
                },
                text: {
                    fontSize: 12
                }
            },
            ports,
            data: {
                config: {
                    type: 'start',
                    data: '{}'
                }
            },
            tools: ['node-editor'],
            groups: ['global']
        },
        {
            shape: 'circle',
            label: 'end',
            width,
            height,
            attrs: {
                body: {
                    ...commonAttrs.body,
                    fill: '#d9d9d9',
                },
            },
            ports,
            data: {
                config: {
                    type: 'end'
                }
            },
            tools: ['node-editor'],
            groups: ['global']
        },
        {
            shape: 'ExtSharp',
            ports,
            attrs: {
                body: {
                    rx: 6,
                    ry: 6,
                    stroke: 'red',
                    strokeWidth: 1,
                },
                // image: {
                //     x: 4,
                //     y: 4,
                //     width: 16,
                //     height: 16,
                //     'xlink:href': '/icons/warning.svg'
                // },
                text: {
                    x: 4,
                    text: '全局catch',
                    fontSize: 12,
                    fontWeight: 600,
                    textLength: "80",
                    lengthAdjust: "spacing"
                },
            },
            data: {
                config: {
                    type: 'error-catch'
                }
            },
            groups: ['global']
        },
        {
            shape: 'ExtSharp',
            attrs: {
                text: {
                    text: 'http请求'
                },
                image: {
                    'xlink:href': '/icons/http.svg',
                    width: 20,
                    x: 2,
                    y: 2,
                }
            },
            data: {
                config: {
                    type: 'http'
                }
            },
            ports,
            tools: ['node-editor'],
            groups: ['def']
        },
        {
            shape: 'polygon',
            width,
            label: 'switch',
            height,
            attrs: {
                body: {
                    refPoints: '0,10 10,0 20,10 10,20',
                    strokeWidth: 1,
                    stroke: '#5F95FF',
                    fill: '#EFF4FF',
                },
                text: {
                    // text: 'switch',
                    // fontSize: 12,
                    // fill: '#5F95FF',
                    refX: 0.5,
                    refY: '100%',
                    refY2: 4,
                    textAnchor: 'middle',
                    textVerticalAnchor: 'top',
                },
            },
            data: {
                config: {
                    type: 'switch'
                }
            },
            ports,
            tools: ['node-editor'],
            groups: ['def']
        },
        {
            shape: 'ExtSharp',
            ports,
            attrs: {
                image: {
                    width: 15,
                    x: 2,
                    y: 2,
                    'xlink:href': '/icons/code.svg'
                },
                text: {
                    text: 'js代码块',
                },
            },
            data: {
                config: {
                    type: 'js'
                }
            },
            tools: ['node-editor'],
            groups: ['def']
        },
        {
            shape: 'ExtSharp',
            attrs: {
                text: {
                    text: '延时'
                },
                image: {
                    'xlink:href': '/icons/delay.svg',
                    width: 12,
                    x: 3,
                    y: 3,
                }
            },
            data: {
                config: {
                    type: 'wait',
                    timeout: '2000'
                }
            },
            ports,
            tools: ['node-editor'],
            groups: ['def']
        },
        {
            shape: 'ExtSharp',
            data: {
                config: {
                    type: 'process'
                }
            },
            attrs: {
                body: {
                    stroke: '#5F95FF',
                    strokeWidth: 1,
                    fill: 'rgba(95,149,255,0.05)',
                    refWidth: 1,
                    refHeight: 1,
                },
                image: {
                    'xlink:href': '/icons/CarbonSubflowLocal.svg',
                    width: 16,
                    x: 2,
                    y: 2,
                },
                text: {
                    text: '子流程'
                }
            },
            ports,
            tools: ['node-editor'],
            groups: ['def']
        },
        {
            shape: 'ExtSharp',
            attrs: {
                text: {
                    text: '登录'
                },
                image: {
                    'xlink:href': '/icons/http.svg',
                    width: 20,
                    x: 2,
                    y: 2,
                }
            },
            data: {
                config: {
                    type: 'http',
                    url: 'http://192.168.20.135:9000/Token',
                    method: 'POST',
                    headers: JSON.stringify({
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Authorization: 'Basic ZXNib3g6MQ==',
                    }),
                    parameter: JSON.stringify({
                        grant_type: 'client_credentials',
                    })
                }
            },
            ports,
            tools: ['node-editor'],
            groups: ['wcs']
        },
        {
            shape: 'ExtSharp',
            attrs: {
                text: {
                    text: '检测设备状态'
                },
                image: {
                    'xlink:href': '/icons/http.svg',
                    width: 20,
                    x: 2,
                    y: 2,
                }
            },
            data: {
                config: {
                    type: 'http',
                    url: '${_ctx.data.base_url}/api/server/GetResourcesubSystemName=${_ctx.data.subSystemName}&resourceName=${_ctx.data.resourceName}',
                    method: 'POST',
                    headers: JSON.stringify({
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ${_ctx.data.token}',
                    }),
                }
            },
            ports,
            tools: ['node-editor'],
            groups: ['wcs']
        },
        {
            shape: 'ExtSharp',
            attrs: {
                text: {
                    text: '设置手动模式'
                },
                image: {
                    'xlink:href': '/icons/http.svg',
                    width: 20,
                    x: 2,
                    y: 2,
                }
            },
            data: {
                configSchema: 'setManualModel',
                config: {
                    type: 'http',
                }
            },
            ports,
            tools: ['node-editor'],
            groups: ['wcs']
        },
        {
            shape: 'ExtSharp',
            attrs: {
                text: {
                    text: '锁定设备',
                    fill: 'red'
                },
                image: {
                    'xlink:href': '/icons/http.svg',
                    width: 20,
                    x: 2,
                    y: 2,
                }
            },
            data: {
                configSchema: 'lockDevice',
                config: {
                    type: 'http',
                }
            },
            ports,
            tools: ['node-editor'],
            groups: ['wcs']
        },
        {
            shape: 'ExtSharp',
            attrs: {
                text: {
                    text: '行走',
                    fill: 'red'
                },
                image: {
                    'xlink:href': '/icons/http.svg',
                    width: 20,
                    x: 2,
                    y: 2,
                }
            },
            data: {
                configSchema: 'walk',
                config: {
                    type: 'http',
                    headers: JSON.stringify({ "Accept": "application/json" })
                }
            },
            ports,
            tools: ['node-editor'],
            groups: ['wcs']
        },
        {
            shape: 'ExtSharp',
            attrs: {
                text: {
                    text: '取货'
                },
                image: {
                    'xlink:href': '/icons/http.svg',
                    width: 20,
                    x: 2,
                    y: 2,
                }
            },
            data: {
                configSchema: 'pickup',
                config: {
                    type: 'http',
                }
            },
            ports,
            tools: ['node-editor'],
            groups: ['wcs']
        },
        {
            shape: 'ExtSharp',
            attrs: {
                text: {
                    text: '放货'
                },
                image: {
                    'xlink:href': '/icons/http.svg',
                    width: 20,
                    x: 2,
                    y: 2,
                }
            },
            data: {
                configSchema: 'dropoff',
                config: {
                    type: 'http',
                }
            },
            ports,
            tools: ['node-editor'],
            groups: ['wcs']
        },
        {
            shape: 'polygon',
            width,
            label: '请求是否成功',
            height,
            attrs: {
                body: {
                    refPoints: '0,10 10,0 20,10 10,20',
                    strokeWidth: 1,
                    stroke: '#5F95FF',
                    fill: '#EFF4FF',
                },
                text: {
                    // text: 'switch',
                    // fontSize: 12,
                    // fill: '#5F95FF',
                    refX: 0.5,
                    refY: '100%',
                    refY2: 4,
                    textAnchor: 'middle',
                    textVerticalAnchor: 'top',
                },
            },
            data: {
                configSchema: 'httpStatus',
                config: {
                    type: 'switch'
                }
            },
            ports,
            tools: ['node-editor'],
            groups: ['wcs']
        },
    ]

    const customGroups = [
        {
            name: 'global',
            title: '全局节点',
            graphHeight: 180,
        },
        {
            name: 'def',
            title: '默认节点',
            graphHeight: 180
        },
        {
            name: 'wcs',
            title: 'wcs接口',
            graphHeight: 360
        }

    ]
    return {
        customSharps,
        customNodes,
        customGroups
    }
}
export const initData = InitData();