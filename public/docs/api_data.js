define({ "api": [  {    "type": "delete",    "url": "/acts/:act",    "title": "Remove act",    "name": "DeleteAct",    "group": "Acts",    "version": "0.0.0",    "filename": "routes/acts.js",    "groupTitle": "Acts",    "success": {      "examples": [        {          "title": "Response",          "content": "HTTP/1.1 204 No Content",          "type": "json"        }      ]    }  },  {    "type": "delete",    "url": "/acts/:act/comments/:comment",    "title": "Remove act comment",    "name": "DeleteActComment",    "group": "Acts",    "version": "0.0.0",    "filename": "routes/acts.js",    "groupTitle": "Acts",    "success": {      "examples": [        {          "title": "Response",          "content": "HTTP/1.1 204 No Content",          "type": "json"        }      ]    }  },  {    "type": "delete",    "url": "/acts/:act/likes/:like",    "title": "Remove act like",    "name": "DeleteActLike",    "group": "Acts",    "version": "0.0.0",    "filename": "routes/acts.js",    "groupTitle": "Acts",    "success": {      "examples": [        {          "title": "Response",          "content": "HTTP/1.1 204 No Content",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/acts/:act",    "title": "Get act",    "name": "GetAct",    "group": "Acts",    "version": "0.0.0",    "filename": "routes/acts.js",    "groupTitle": "Acts",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Act</p> ",            "optional": false,            "field": "act",            "description": "<p>Act</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "act._id",            "description": "<p>Act ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "act.user",            "description": "<p>User ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "act.group",            "description": "<p>Group ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "act.deed",            "description": "<p>Deed ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>Date</p> ",            "optional": false,            "field": "act.created",            "description": "<p>Created timestamp</p> "          }        ]      },      "examples": [        {          "title": "Response",          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1d\",\n  \"user\": \"55f6c57486b959ac12490e1a\",\n  \"group\": \"55f6c58086b959ac12490e1b\",\n  \"deed\": \"55f6c58b86b959ac12490e1c\",\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/acts/:act/comments",    "title": "List act comments",    "name": "GetActComments",    "group": "Acts",    "version": "0.0.0",    "filename": "routes/acts.js",    "groupTitle": "Acts",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Comment[]</p> ",            "optional": false,            "field": "comments",            "description": "<p>List of comments</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comments._id",            "description": "<p>Comment ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comments.user",            "description": "<p>User ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>Date</p> ",            "optional": false,            "field": "comments.created",            "description": "<p>Created timestamp</p> "          },          {            "group": "Success 200",            "type": "<p>Object</p> ",            "optional": false,            "field": "comments.content",            "description": "<p>Content object</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comments.content.text",            "description": "<p>Text content</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comments.content.image",            "description": "<p>Image content</p> "          },          {            "group": "Success 200",            "type": "<p>Object</p> ",            "optional": false,            "field": "comments.target",            "description": "<p>Target object. Only one of user, group, deed, act or news will be set</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comments.target.user",            "description": "<p>User ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comments.target.group",            "description": "<p>Group ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comments.target.deed",            "description": "<p>Deed ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comments.target.act",            "description": "<p>Act ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comments.target.news",            "description": "<p>News ObjectId</p> "          }        ]      },      "examples": [        {          "title": "Response",          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1b\"\n  }\n}]",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/acts/:act/likes",    "title": "List act likes",    "name": "GetActLikes",    "group": "Acts",    "version": "0.0.0",    "filename": "routes/acts.js",    "groupTitle": "Acts",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Like[]</p> ",            "optional": false,            "field": "likes",            "description": "<p>List of likes</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "likes._id",            "description": "<p>Like ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "likes.user",            "description": "<p>User ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>Date</p> ",            "optional": false,            "field": "likes.created",            "description": "<p>Created timestamp</p> "          },          {            "group": "Success 200",            "type": "<p>Object</p> ",            "optional": false,            "field": "likes.target",            "description": "<p>Target object. Only one of deed, act or news will be set</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "likes.target.deed",            "description": "<p>Deed ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "likes.target.act",            "description": "<p>Act ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "likes.target.news",            "description": "<p>News ObjectId</p> "          }        ]      },      "examples": [        {          "title": "Response",          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"created\": \"2015-09-14T13:56:27.250Z,\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1b\"\n  }\n}]",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/acts",    "title": "List acts",    "name": "GetActs",    "group": "Acts",    "version": "0.0.0",    "filename": "routes/acts.js",    "groupTitle": "Acts",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Act[]</p> ",            "optional": false,            "field": "acts",            "description": "<p>List of acts</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "acts._id",            "description": "<p>Act ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "acts.user",            "description": "<p>User ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "acts.group",            "description": "<p>Group ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "acts.deed",            "description": "<p>Deed ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>Date</p> ",            "optional": false,            "field": "acts.created",            "description": "<p>Created timestamp</p> "          }        ]      },      "examples": [        {          "title": "Response",          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1d\",\n  \"user\": \"55f6c57486b959ac12490e1a\",\n  \"group\": \"55f6c58086b959ac12490e1b\",\n  \"deed\": \"55f6c58b86b959ac12490e1c\",\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}]",          "type": "json"        }      ]    }  },  {    "type": "post",    "url": "/acts/:act/comments",    "title": "Create act comment",    "name": "PostActComments",    "group": "Acts",    "version": "0.0.0",    "filename": "routes/acts.js",    "groupTitle": "Acts",    "success": {      "fields": {        "201": [          {            "group": "201",            "type": "<p>Comment</p> ",            "optional": false,            "field": "comment",            "description": "<p>Created comment</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "comment._id",            "description": "<p>Comment ObjectId</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.user",            "description": "<p>User ObjectId</p> "          },          {            "group": "201",            "type": "<p>Date</p> ",            "optional": false,            "field": "comment.created",            "description": "<p>Created timestamp</p> "          },          {            "group": "201",            "type": "<p>Object</p> ",            "optional": false,            "field": "comment.content",            "description": "<p>Content object</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.content.text",            "description": "<p>Text content</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.content.image",            "description": "<p>Image content</p> "          },          {            "group": "201",            "type": "<p>Object</p> ",            "optional": false,            "field": "comment.target",            "description": "<p>Target object. Only one of user, group, deed, act or news will be set</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.target.user",            "description": "<p>User ObjectId</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.target.group",            "description": "<p>Group ObjectId</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.target.deed",            "description": "<p>Deed ObjectId</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.target.act",            "description": "<p>Act ObjectId</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.target.news",            "description": "<p>News ObjectId</p> "          }        ]      },      "examples": [        {          "title": "Response",          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1b\"\n  }\n}",          "type": "json"        }      ]    }  },  {    "type": "post",    "url": "/acts/:act/likes",    "title": "Create act like",    "name": "PostActLikes",    "group": "Acts",    "version": "0.0.0",    "filename": "routes/acts.js",    "groupTitle": "Acts",    "success": {      "fields": {        "201": [          {            "group": "201",            "type": "<p>Like</p> ",            "optional": false,            "field": "like",            "description": "<p>Created like</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "like._id",            "description": "<p>Like ObjectId</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "like.user",            "description": "<p>User ObjectId</p> "          },          {            "group": "201",            "type": "<p>Date</p> ",            "optional": false,            "field": "like.created",            "description": "<p>Created timestamp</p> "          },          {            "group": "201",            "type": "<p>Object</p> ",            "optional": false,            "field": "like.target",            "description": "<p>Target object. Only one of deed, act or news will be set</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "like.target.deed",            "description": "<p>Deed ObjectId</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "like.target.act",            "description": "<p>Act ObjectId</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "like.target.news",            "description": "<p>News ObjectId</p> "          }        ]      },      "examples": [        {          "title": "Response",          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1b\"\n  }\n}",          "type": "json"        }      ]    }  },  {    "type": "post",    "url": "/acts",    "title": "Create act",    "name": "PostActs",    "group": "Acts",    "version": "0.0.0",    "filename": "routes/acts.js",    "groupTitle": "Acts",    "success": {      "fields": {        "201": [          {            "group": "201",            "type": "<p>Act</p> ",            "optional": false,            "field": "act",            "description": "<p>Created act</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "act._id",            "description": "<p>Act ObjectId</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "act.user",            "description": "<p>User ObjectId</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "act.group",            "description": "<p>Group ObjectId</p> "          },          {            "group": "201",            "type": "<p>string</p> ",            "optional": false,            "field": "act.deed",            "description": "<p>Deed ObjectId</p> "          },          {            "group": "201",            "type": "<p>Date</p> ",            "optional": false,            "field": "act.created",            "description": "<p>Created timestamp</p> "          }        ]      },      "examples": [        {          "title": "Response",          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1d\",\n  \"user\": \"55f6c57486b959ac12490e1a\",\n  \"group\": \"55f6c58086b959ac12490e1b\",\n  \"deed\": \"55f6c58b86b959ac12490e1c\",\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",          "type": "json"        }      ]    }  },  {    "type": "put",    "url": "/acts/:act/comments/:comment",    "title": "Update act comment",    "name": "PutActComment",    "group": "Acts",    "version": "0.0.0",    "filename": "routes/acts.js",    "groupTitle": "Acts",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Comment</p> ",            "optional": false,            "field": "comment",            "description": "<p>Comment</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comment._id",            "description": "<p>Comment ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.user",            "description": "<p>User ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>Date</p> ",            "optional": false,            "field": "comment.created",            "description": "<p>Created timestamp</p> "          },          {            "group": "Success 200",            "type": "<p>Object</p> ",            "optional": false,            "field": "comment.content",            "description": "<p>Content object</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.content.text",            "description": "<p>Text content</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.content.image",            "description": "<p>Image content</p> "          },          {            "group": "Success 200",            "type": "<p>Object</p> ",            "optional": false,            "field": "comment.target",            "description": "<p>Target object. Only one of user, group, deed, act or news will be set</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.target.user",            "description": "<p>User ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.target.group",            "description": "<p>Group ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.target.deed",            "description": "<p>Deed ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.target.act",            "description": "<p>Act ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "comment.target.news",            "description": "<p>News ObjectId</p> "          }        ]      },      "examples": [        {          "title": "Response",          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1b\"\n  }\n}",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/countries",    "title": "List countries",    "name": "GetCountries",    "group": "Countries",    "version": "0.0.0",    "filename": "routes/countries.js",    "groupTitle": "Countries",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Country[]</p> ",            "optional": false,            "field": "countries",            "description": "<p>List of countries</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "countries._id",            "description": "<p>Country ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "countries.code",            "description": "<p>2-letter country code</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "countries.name",            "description": "<p>Country name</p> "          }        ]      },      "examples": [        {          "title": "Response",          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1a\",\n  \"code\": \"AU\",\n  \"name\": \"Australia\"\n}]",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/countries/:country",    "title": "Get country",    "name": "GetCountry",    "group": "Countries",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>string</p> ",            "optional": false,            "field": "country",            "description": "<p>Unique country ObjectId</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "routes/countries.js",    "groupTitle": "Countries",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Country</p> ",            "optional": false,            "field": "country",            "description": "<p>Country</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "country._id",            "description": "<p>Country ObjectId</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "country.code",            "description": "<p>2-letter country code</p> "          },          {            "group": "Success 200",            "type": "<p>string</p> ",            "optional": false,            "field": "country.name",            "description": "<p>Country name</p> "          }        ]      },      "examples": [        {          "title": "Response",          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1a\",\n  \"code\": \"AU\",\n  \"name\": \"Australia\"\n}",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/countries/:country/groups",    "title": "Get country groups",    "name": "GetCountryGroups",    "group": "Countries",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>string</p> ",            "optional": false,            "field": "country",            "description": "<p>Unique country ObjectId</p> "          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Group[]</p> ",            "optional": false,            "field": "groups",            "description": "<p>Collection of groups belonging to a country</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "routes/countries.js",    "groupTitle": "Countries"  }] });