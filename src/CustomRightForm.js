const common = {
    name: {
        title: '名称',
        type: 'string',
        widget: 'textArea',
        props: {
            rows: 1,
        }
    }
};
export function getFormSchema(tplOrType) {
    switch (tplOrType) {
        case 'task':
            return {
                ...common,
                type_path: {
                    title: '任务类型Path ',
                    type: 'string'
                }
            }
            break;
        case 'switch':
            return {
                ...common,
                condition: {
                    title: '条件表达式 ',
                    type: 'string',
                }
            }
            break;
        case 'js':
            return {
                ...common,
                script: {
                    title: 'js脚本 ',
                    type: 'string',
                    widget: 'js',
                    props: {
                        height: 500
                    }
                }
            }
            break;
        case 'walk':
            return {
                ...common,
                system: {
                    title: '系统名 ',
                    type: 'string',
                    defaultValue: ''
                },
                url: {
                    title: '请求URL： ',
                    type: 'string',
                    widget: 'textArea',
                    defaultValue: 'http://api/walk?c00',
                    props: {
                        rows: 1,
                    }
                },
                method: {
                    title: '请求类型：',
                    type: 'string',
                    props: {
                        options: [
                            { label: 'POST', value: 'POST' },
                            { label: 'GET', value: 'GET' },
                            { label: 'PUT', value: 'PUT' },
                            { label: 'DELETE', value: 'DELETE' }
                        ],
                        defaultValue: 'POST'
                    },
                    widget: 'radio',
                },
                headers: {
                    title: '请求头(headers) ',
                    type: 'string',
                    widget: 'json',
                    props: {
                        height: 100,
                        // defaultValue: JSON.stringify({ "Accept": "application/json" }),
                    }
                },
                parameter: {
                    title: '请求参数(body)',
                    type: 'string',
                    widget: 'json',
                    props: {
                        height: 200
                    }
                },
                timeout: {
                    title: '执行超时时间(ms)',
                    defaultValue: 2000,
                    type: 'number'
                }
            }
        case 'http':
            return {
                ...common,
                system: {
                    title: '系统名 ',
                    type: 'string',
                    defaultValue: ''
                },
                url: {
                    title: '请求URL： ',
                    type: 'string',
                    widget: 'textArea',
                    props: {
                        rows: 1,
                    }
                },
                method: {
                    title: '请求类型：',
                    type: 'string',
                    props: {
                        options: [
                            { label: 'POST', value: 'POST' },
                            { label: 'GET', value: 'GET' },
                            { label: 'PUT', value: 'PUT' },
                            { label: 'DELETE', value: 'DELETE' }
                        ],
                        defaultValue: 'POST'
                    },
                    widget: 'radio',
                },
                headers: {
                    title: '请求头(headers) ',
                    type: 'string',
                    widget: 'json',
                    props: {
                        height: 100
                    }
                },
                parameter: {
                    title: '请求参数(body)',
                    type: 'string',
                    widget: 'json',
                    props: {
                        height: 200
                    }
                },
                timeout: {
                    title: '执行超时时间(ms)',
                    defaultValue: 2000,
                    type: 'number'
                }
            }
        case 'start':
            return {
                name: {
                    title: '名称',
                    type: 'string',
                    widget: 'textArea',
                    props: {
                        rows: 1,
                    }
                },
                data: {
                    title: '全局变量声明',
                    type: 'string',
                    widget: 'json',
                    props: {
                        height: 500,
                        // defaultValue: JSON.stringify({ _input: {} }),
                    }
                }
            }
        case 'end':
            return {
                name: {
                    title: '名称',
                    type: 'string',
                    widget: 'textArea',
                    props: {
                        rows: 1,
                    }
                },
            }
        case 'move':
            return {
                wcs_svc: {
                    title: 'WCS服务',
                    type: 'string',
                    widget: 'textArea',
                    defaultValue: '/api/wcs/move/1',
                    props: {
                        rows: 1,
                    }
                },
                method: {
                    title: '请求类型：',
                    type: 'string',
                    props: {
                        options: [
                            { label: 'POST', value: 'POST' },
                            { label: 'GET', value: 'GET' },
                            { label: 'PUT', value: 'PUT' },
                            { label: 'DELETE', value: 'DELETE' }
                        ],
                        defaultValue: 'POST'
                    },
                    widget: 'radio',
                },
                headers: {
                    title: '请求头(headers) ',
                    type: 'string',
                    widget: 'json',
                    props: {
                        height: 100
                    }
                },
            }
        case 'wait':
            return {
                name: {
                    title: '名称',
                    type: 'string',
                    widget: 'textArea',
                    props: {
                        rows: 1,
                    }
                },
                timeout: {
                    title: '延时设置(ms)',
                    defaultValue: 2000,
                    type: 'number'
                }
            }
        default:
            return common
    }
}