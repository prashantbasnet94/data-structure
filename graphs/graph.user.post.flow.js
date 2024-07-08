const jsonData = {
    "create-post": [
        {
            "name": "Suggest me University",
            "children": [
                {
                    "name": "Level of Study",
                    "options": ["Undergraduate", "Graduate", "PhD"]
                },
                {
                    "name": "GPA",
                    "options": {
                        "scale": {
                            "min": 1,
                            "max": 4
                        }
                    }
                },
                {
                    "name": "Test Scores",
                    "children": [
                        {
                            "name": "SAT",
                            "options": {
                                "type": "input",
                                "placeholder": "Enter SAT score"
                            }
                        },
                        {
                            "name": "ACT",
                            "options": {
                                "type": "input",
                                "placeholder": "Enter ACT score"
                            }
                        },
                        {
                            "name": "GRE",
                            "options": {
                                "type": "input",
                                "placeholder": "Enter GRE score"
                            }
                        },
                        {
                            "name": "GMAT",
                            "options": {
                                "type": "input",
                                "placeholder": "Enter GMAT score"
                            }
                        }
                    ]
                },
                {
                    "name": "Major or Field of Study",
                    "options": {
                        "type": "input",
                        "placeholder": "Search and select the major"
                    }
                },
                {
                    "name": "Preferred Location",
                    "options": {
                        "type": "input",
                        "placeholder": "Enter preferred location"
                    }
                },
                {
                    "name": "Description",
                    "options": {
                        "type": "textarea",
                        "placeholder": "Description about post"
                    }
                }
            ]
        },
        {
            "name": "I Have a Question About a University",
            "children": [
                {
                    "name": "Level of Study",
                    "options": ["Undergraduate", "Graduate", "PhD"]
                },
                {
                    "name": "University Search",
                    "options": {
                        "type": "input",
                        "placeholder": "Search and select the university"
                    }
                },
                {
                    "name": "Major/Field of Study",
                    "children": [
                        {
                            "name": "Major",
                            "options": {
                                "type": "input",
                                "placeholder": "Search and select the major"
                            }
                        }
                    ]
                },
                {
                    "name": "Question Category",
                    "options": [
                        "Admissions & Applications",
                        "Financial Aid & Scholarships",
                        "Academic Programs & Department",
                        "Student Life & Services",
                        "Career & Alumni Resources",
                        "Athletics & Recreation",
                        "Cultural & Arts Activities",
                        "Sustainability & Campus Initiatives"
                    ]
                },
                {
                    "name": "Description",
                    "options": {
                        "type": "textarea",
                        "placeholder": "Description about post"
                    }
                }
            ]
        }
    ]
}

let formGraph = {};

class vertex {
    constructor(name, options = null) {
        this.name = name;
        this.options = options;
        this.children = [];
        this.totalNodes = 0
    }

    addVertex(node) {
        this.totalNodes += this.totalNodes
        this.children.push(node);
    }
}

function createGraphNodes(data, parent = null) {
    data.forEach(item => {
        const newNode = new vertex(item.name, item.options);
        formGraph[item.name] = newNode;

        if (parent) {
            parent.addVertex(newNode);
        }

        if (item.children) {
            createGraphNodes(item.children, newNode);
        }
    });
}

console.log(jsonData['create-post'])
// Initialize graph creation
jsonData['create-post'].forEach(post => createGraphNodes([post]));



/*

function dfs(node, values) {
    values.push(node.name);
    node.children.forEach(child => dfs(child, values)); // Corrected recursive call
}

// Example usage for DFS
let dfsResult = [];
dfs(formGraph["Suggest me University"], dfsResult);
console.log('DFS:', dfsResult);



function bfs(startNode) {
    let queue = [startNode];
    let values = []

    while (queue.length > 0) {
        const currentNode = queue.shift();
        values.push(currentNode.name)
        currentNode.children.forEach(child => queue.push(child));
    }
    return values
}

 console.log('bfs -> ', bfs(formGraph["Suggest me University"]))
*/


function renderFormField(node, result = []) {
    // Add the current node's name to the result
    result.push(node.name);
    // Traverse through the children of the current node
    node.children.forEach(childNode => {
        renderFormField(childNode, result);
    });
    return result;
}

// Example usage
const rootSection = formGraph["Suggest me University"];
let result = renderFormField(rootSection);

console.log({ rootSection, result })




function bfs(startNode) {
    let queue = [startNode];
    let values = []

    while (queue.length > 0) {
        const currentNode = queue.shift();
        values.push(currentNode.name)
        currentNode.children.forEach(child => queue.push(child));
    }
    return values
}

console.log('bfs -> ', bfs(formGraph["Suggest me University"]))




let subCategory = {
    "admissionsAndApplicationsTag": {
        "name": "Admissions & Applications",
        "type": "tag",
        "subtag": true
    },
    "financialAidAndScholarshipsTag": {
        "name": "Financial Aid & Scholarships",
        "type": "tag",
        "subtag": true
    },
    "academicProgramsAndDepartmentTag": {
        "name": "Academic Programs & Department",
        "type": "tag",
        "subtag": true
    },
    "studentLifeAndServicesTag": {
        "name": "Student Life & Services",
        "type": "tag",
        "subtag": true
    },
    "careerAndAlumniResourcesTag": {
        "name": "Career & Alumni Resources",
        "type": "tag",
        "subtag": true
    },
    "athleticsAndRecreationTag": {
        "name": "Athletics & Recreation",
        "type": "tag",
        "subtag": true
    },
    "culturalAndArtsActivitiesTag": {
        "name": "Cultural & Arts Activities",
        "type": "tag",
        "subtag": true
    },
    "sustainabilityAndCampusInitiativesTag": {
        "name": "Sustainability & Campus Initiatives",
        "type": "tag",
        "subtag": true
    }
}

let graphData = {
    "nodes": {
        "suggestMeUniversity": {
            "name": "Suggest me University",
            "type": "tag",  // Assuming this is a dropdown in the UI
        },
        "levelOfStudy": {
            "name": "Level of Study",
            "type": "select",
            "options": ["Undergraduate", "Graduate", "PhD"]
        },
        "major": {
            "name": "Major",
            "type": "input",
            "api": true,
            "placeholder": "Search and select the major"
        },
        "gpa": {
            "name": "GPA",
            "type": "input",
            "validation": {
                "min": 0,
                "max": 4.0
            },
            "placeholder": "Enter your GPA"
        },
        "testScores": {
            "name": "Test Scores",
            "type": "select",
            "options": ["SAT", "ACT", "GRE", "GMAT"],
            "conditionalEdges": {
                "Undergraduate": ["SAT", "ACT"],
                "Graduate": ["GRE", "GMAT"]
            }
        },
        "sat": {
            "name": "SAT",
            "type": "input",
            "validation": {
                "min": 400,
                "max": 1600
            },
            "placeholder": "Enter SAT score"
        },
        "act": {
            "name": "ACT",
            "type": "input",
            "validation": {
                "min": 1,
                "max": 36
            },
            "placeholder": "Enter ACT score"
        },
        "preferredLocation": {
            "name": "Preferred Location",
            "type": "input",
            "api": true, // Indicates an API call is required
            "placeholder": "Enter preferred location"
        },
        "additionalDescriptionQuestion": {
            "name": "Additional Description",
            "type": "textarea",
            "placeholder": "Additional information for your post"
        },
        //   ...subCategory,


        "questionAboutUniversity": {
            "name": "I Have a Question About a University",
            "type": "tag"
        },
        "universitySearch": {
            "name": "University Search Field",
            "type": "input",
            "api": true,
            "placeholder": "Search and select the university"
        },
        "relationToMajor": {
            "name": "Relation to Major/Field of Study",
            "type": "checkbox"
        },
        "reviewSubCategories": {
            "name": "Related Tags",
            "type": "tag",
            "options": [
                "Admissions & Applications",
                "Financial Aid & Scholarships",
                "Academic Programs & Department",
                "Student Life & Services",
                "Career & Alumni Resources",
                "Athletics & Recreation",
                "Cultural & Arts Activities",
                "Sustainability & Campus Initiatives"
            ],
            "subtag": true
        },

        "userRating": {
            "name": "Your Ratings",
            "type": "select",
            "options": ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"]
          },
          "anonymityOption": {
            "name": "Anonymity Option",
            "type": "checkbox"
          },

        "reviewUniversity": {
            "name": "Review University",
            "type": "tag",
          },

          "guidelinesReminder": {
            "name": "Guidelines Reminder",
            "type": "label",
            "content": "Be kind, respectful, and constructive in your feedback."
        },

    },
    "edges": {
        "suggestMeUniversity": [
            "levelOfStudy", "major",
            "gpa",
            "testScores",
            "preferredLocation",
            "additionalDescriptionQuestion"
        ],
        "questionAboutUniversity": [
            "levelOfStudy",
            "universitySearch",
            "relationToMajor",
            "reviewSubCategories",
            "additionalDescriptionQuestion"
        ],
        "reviewUniversity": [
            "universitySearch",
            "relationToMajor",
            "reviewSubCategories",
            "ratingSystem",
            "additionalDescriptionReview",
            "anonymityOption",
            "guidelinesReminder",
          ]
    },
    "conditionalEdges": {
        "levelOfStudy": [
          {
            "condition": "Undergraduate",
            "targetId": "testScores"
          },
          {
            "condition": "Graduate",
            "targetId": "testScores"
          }
        ]
    }
}
  

/*
  class GraphNode {
        constructor(id, name, type, options = null, api = false, validation = null) {
            this.id = id;
            this.name = name;
            this.type = type;
            this.options = options;
            this.api = api;
            this.validation = validation;
            this.edges = [];
            this.conditionalEdges = {};

        }

addEdge(node) {
    this.edges.push(node);
}
addConditionalEdge(condition, node) {
    if (!this.conditionalEdges[condition]) {
        this.conditionalEdges[condition] = [];
    }
    this.conditionalEdges[condition].push(node);
}
}

const nodes = {};
Object.entries(graphData.nodes).forEach(([id, data]) => {
    nodes[id] = new GraphNode(id, data.name, data.type, data.options, data.api, data.validation);
});

// Create edges from graphData
Object.entries(graphData.edges).forEach(([sourceId, targetIds]) => {
    targetIds.forEach(targetId => {
        nodes[sourceId].addEdge(nodes[targetId]);
    });
});




function dfs(node, visitFn) {
    visitFn(node);

    node.edges.forEach(childNode => {
        dfs(childNode, visitFn);
    });

    // Handling conditional edges
    Object.keys(node.conditionalEdges).forEach(condition => {
        node.conditionalEdges[condition].forEach(childNode => {
            dfs(childNode, visitFn);
        });
    });
}

// Example visit function
function logNode(node) {
    console.log(`Visiting node: ${node.name}`);
}

// Start DFS traversal from the 'suggestMeUniversity' node

function dfsWithConditions(node, visitFn, userChoices) {
    visitFn(node);

    node.edges.forEach(childNode => {
        dfsWithConditions(childNode, visitFn, userChoices);
    });

    // Check user choices to determine conditional paths
    Object.keys(node.conditionalEdges).forEach(condition => {
        if (userChoices[condition]) {
            node.conditionalEdges[condition].forEach(childNode => {
                dfsWithConditions(childNode, visitFn, userChoices);
            });
        }
    });
}

// Example user choices
let userChoices = {
    "levelOfStudy": "Undergraduate"
};

// Start traversal with conditions
dfsWithConditions(nodes['suggestMeUniversity'], logNode, userChoices);



*/


class GraphNode {
    constructor(id, name, type, options = null, api = false, validation = null) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.options = options;
        this.api = api;
        this.validation = validation;
        this.edges = [];
        this.conditionalEdges = {};
    }

    addEdge(node) {
        this.edges.push(node);
    }

    addConditionalEdge(condition, node) {
        if (!this.conditionalEdges[condition]) {
            this.conditionalEdges[condition] = [];
        }
        this.conditionalEdges[condition].push(node);
    }
}


const nodes = {};
Object.entries(graphData.nodes).forEach(([id, data]) => {
    nodes[id] = new GraphNode(id, data.name, data.type, data.options, data.api, data.validation);
});

// Create edges from graphData
Object.entries(graphData.edges).forEach(([sourceId, targetIds]) => {
    targetIds.forEach(targetId => {
        nodes[sourceId].addEdge(nodes[targetId]);
    });
});

// Create conditional edges
Object.entries(graphData.conditionalEdges).forEach(([sourceId, conditions]) => {
    conditions.forEach(({ condition, targetId }) => {
        nodes[sourceId].addConditionalEdge(condition, nodes[targetId]);
    });
});


console.log('****************')
console.log()




// Example visit function to log the visited node's name
function logNode(node) {
    console.log(`Visiting node: ${node.name}`);
  }
  


// Start DFS traversal from the 'suggestMeUniversity' node

function dfsWithConditions(node, visitFn, userChoices) {
    visitFn(node);
  
    node.edges.forEach(childNode => {
      dfsWithConditions(childNode, visitFn, userChoices);
    });
  
    // Check user choices to determine conditional paths
    Object.keys(node.conditionalEdges).forEach(condition => {
      if (userChoices[condition]) {
        node.conditionalEdges[condition].forEach(childNode => {
          dfsWithConditions(childNode, visitFn, userChoices);
        });
      }
    });
  }
// Example user choices
let userChoices = {
  };
  
  // Start traversal with conditions
  dfsWithConditions(nodes['suggestMeUniversity'], logNode, userChoices);
  