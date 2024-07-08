let graphData = {
    nodes: {
      suggestMeUniversity: {
        name: "Suggest me University",
        type: "tag", // Assuming this is a dropdown in the UI
      },
      levelOfStudy: {
        name: "Level of Study",
        type: "select",
        options: ["Undergraduate", "Graduate", "PhD"],
      },
      major: {
        name: "Major",
        type: "input",
        api: true,
        placeholder: "Search and select the major",
      },
      gpa: {
        name: "GPA",
        type: "input",
        validation: {
          min: 0,
          max: 4.0,
        },
        placeholder: "Enter your GPA",
      },
      testScores: {
        name: "Test Scores",
        type: "select",
        options: ["SAT", "ACT", "GRE", "GMAT"],
        conditionalEdges: {
          Undergraduate: ["SAT", "ACT"],
          Graduate: ["GRE", "GMAT"],
        },
      },
      sat: {
        name: "SAT",
        type: "input",
        validation: {
          min: 400,
          max: 1600,
        },
        placeholder: "Enter SAT score",
      },
      act: {
        name: "ACT",
        type: "input",
        validation: {
          min: 1,
          max: 36,
        },
        placeholder: "Enter ACT score",
      },
      preferredLocation: {
        name: "Preferred Location",
        type: "input",
        api: true, // Indicates an API call is required
        placeholder: "Enter preferred location",
      },
      additionalDescriptionQuestion: {
        name: "Additional Description",
        type: "textarea",
        placeholder: "Additional information for your post",
      },
      //   ...subCategory,
  
      questionAboutUniversity: {
        name: "I Have a Question About a University",
        type: "tag",
      },
      universitySearch: {
        name: "University Search Field",
        type: "input",
        api: true,
        placeholder: "Search and select the university",
      },
      relationToMajor: {
        name: "Relation to Major/Field of Study",
        type: "checkbox",
      },
      reviewSubCategories: {
        name: "Related Tags",
        type: "tag",
        options: [
          "Admissions & Applications",
          "Financial Aid & Scholarships",
          "Academic Programs & Department",
          "Student Life & Services",
          "Career & Alumni Resources",
          "Athletics & Recreation",
          "Cultural & Arts Activities",
          "Sustainability & Campus Initiatives",
        ],
        subtag: true,
      },
  
      userRating: {
        name: "Your Ratings",
        type: "select",
        options: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
      },
      anonymityOption: {
        name: "Anonymity Option",
        type: "checkbox",
      },
  
      reviewUniversity: {
        name: "Review University",
        type: "tag",
      },
  
      guidelinesReminder: {
        name: "Guidelines Reminder",
        type: "label",
        content: "Be kind, respectful, and constructive in your feedback.",
      },
    },
    edges: {
      suggestMeUniversity: [
        "levelOfStudy",
        "major",
        "gpa",
        "testScores",
        "preferredLocation",
        "additionalDescriptionQuestion",
      ],
      questionAboutUniversity: [
        "levelOfStudy",
        "universitySearch",
        "relationToMajor",
        "reviewSubCategories",
        "additionalDescriptionQuestion",
      ],
      reviewUniversity: [
        "universitySearch",
        "relationToMajor",
        "reviewSubCategories",
        "userRating",
        "additionalDescriptionQuestion",
        "anonymityOption",
        "guidelinesReminder",
      ],
    },
    conditionalEdges: {
      levelOfStudy: [
        {
          condition: "Undergraduate",
          targetId: "testScores",
        },
        {
          condition: "Graduate",
          targetId: "testScores",
        },
      ],
    },
  };
  
  class Graph {
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
    nodes[id] = new Graph(
      id,
      data.name,
      data.type,
      data.options,
      data.api,
      data.validation
    );
  });
  
  // Create edges from graphData
  Object.entries(graphData.edges).forEach(([sourceId, targetIds]) => {
    targetIds.forEach((targetId) => {
      nodes[sourceId].addEdge(nodes[targetId]);
    });
  });
  
  // Create conditional edges
  Object.entries(graphData.conditionalEdges).forEach(([sourceId, conditions]) => {
    conditions.forEach(({ condition, targetId }) => {
      nodes[sourceId].addConditionalEdge(condition, nodes[targetId]);
    });
  });
  
  console.log("****************");
  const { edges } = graphData;
  const filteredNodes = {};
  
  for (const nodeId in nodes) {
    if (edges.hasOwnProperty(nodeId)) {
      filteredNodes[nodeId] = nodes[nodeId];
    }
  }
  console.log(filteredNodes);
  module.exports = filteredNodes;
  



  /*


  import React, { useState } from "react";
const metaData = {
  suggestMeUniversity: {
    id: "suggestMeUniversity",
    name: "Suggest me University",
    type: "tag",
    options: null,
    api: false,
    validation: null,
    edges: [
      {
        id: "levelOfStudy",
        name: "Level of Study",
        type: "select",
        options: ["Undergraduate", "Graduate", "PhD"],
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {
          Undergraduate: [
            {
              id: "testScores",
              name: "Test Scores",
              type: "select",
              options: ["SAT", "ACT", "GRE", "GMAT"],
              api: false,
              validation: null,
              edges: [],
              conditionalEdges: {},
            },
          ],
          Graduate: [
            {
              id: "testScores",
              name: "Test Scores",
              type: "select",
              options: ["SAT", "ACT", "GRE", "GMAT"],
              api: false,
              validation: null,
              edges: [],
              conditionalEdges: {},
            },
          ],
        },
      },
      {
        id: "major",
        name: "Major",
        type: "input",
        options: null,
        api: true,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "gpa",
        name: "GPA",
        type: "input",
        options: null,
        api: false,
        validation: {
          min: 0,
          max: 4,
        },
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "testScores",
        name: "Test Scores",
        type: "select",
        options: ["SAT", "ACT", "GRE", "GMAT"],
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "preferredLocation",
        name: "Preferred Location",
        type: "input",
        options: null,
        api: true,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "additionalDescriptionQuestion",
        name: "Additional Description",
        type: "textarea",
        options: null,
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
    ],
    conditionalEdges: {},
  },
  questionAboutUniversity: {
    id: "questionAboutUniversity",
    name: "I Have a Question About a University",
    type: "tag",
    options: null,
    api: false,
    validation: null,
    edges: [
      {
        id: "levelOfStudy",
        name: "Level of Study",
        type: "select",
        options: ["Undergraduate", "Graduate", "PhD"],
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {
          Undergraduate: [
            {
              id: "testScores",
              name: "Test Scores",
              type: "select",
              options: ["SAT", "ACT", "GRE", "GMAT"],
              api: false,
              validation: null,
              edges: [],
              conditionalEdges: {},
            },
          ],
          Graduate: [
            {
              id: "testScores",
              name: "Test Scores",
              type: "select",
              options: ["SAT", "ACT", "GRE", "GMAT"],
              api: false,
              validation: null,
              edges: [],
              conditionalEdges: {},
            },
          ],
        },
      },
      {
        id: "universitySearch",
        name: "University Search Field",
        type: "input",
        options: null,
        api: true,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "relationToMajor",
        name: "Relation to Major/Field of Study",
        type: "checkbox",
        options: null,
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "reviewSubCategories",
        name: "Related Tags",
        type: "tag",
        options: [
          "Admissions & Applications",
          "Financial Aid & Scholarships",
          "Academic Programs & Department",
          "Student Life & Services",
          "Career & Alumni Resources",
          "Athletics & Recreation",
          "Cultural & Arts Activities",
          "Sustainability & Campus Initiatives",
        ],
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "additionalDescriptionQuestion",
        name: "Additional Description",
        type: "textarea",
        options: null,
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
    ],
    conditionalEdges: {},
  },
  reviewUniversity: {
    id: "reviewUniversity",
    name: "Review University",
    type: "tag",
    options: null,
    api: false,
    validation: null,
    edges: [
      {
        id: "universitySearch",
        name: "University Search Field",
        type: "input",
        options: null,
        api: true,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "relationToMajor",
        name: "Relation to Major/Field of Study",
        type: "checkbox",
        options: null,
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "reviewSubCategories",
        name: "Related Tags",
        type: "tag",
        options: [
          "Admissions & Applications",
          "Financial Aid & Scholarships",
          "Academic Programs & Department",
          "Student Life & Services",
          "Career & Alumni Resources",
          "Athletics & Recreation",
          "Cultural & Arts Activities",
          "Sustainability & Campus Initiatives",
        ],
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "userRating",
        name: "Your Ratings",
        type: "select",
        options: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "additionalDescriptionQuestion",
        name: "Additional Description",
        type: "textarea",
        options: null,
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "anonymityOption",
        name: "Anonymity Option",
        type: "checkbox",
        options: null,
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "guidelinesReminder",
        name: "Guidelines Reminder",
        type: "label",
        options: null,
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
    ],
    conditionalEdges: {},
  },
};

export const Graph = () => {
  // Initialize currentNode with null initially
  const [currentNode, setCurrentNode] = useState(null);

  const handleNodeSelection = (nodeName) => {
    const selectedNode = metaData[nodeName];
    if (selectedNode) {
      setCurrentNode(selectedNode);
    }
  };

  return (
    <div>
      <button onClick={() => handleNodeSelection("suggestMeUniversity")}>
        Suggest me University
      </button>
      <button onClick={() => handleNodeSelection("questionAboutUniversity")}>
        I Have a Question About a University
      </button>
      <button onClick={() => handleNodeSelection("reviewUniversity")}>
        Review University
      </button>

      {currentNode && (
        <div>
          {currentNode.edges.map((child) => (
            <button
              key={child.name}
              onClick={() => handleNodeSelection(child.id)}
            >
              {child.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};







****************

import React, { useState } from "react";
const metaData = {
  suggestMeUniversity: {
    id: "suggestMeUniversity",
    name: "Suggest me University",
    type: "tag",
    options: null,
    api: false,
    validation: null,
    edges: [
      {
        id: "levelOfStudy",
        name: "Level of Study",
        type: "select",
        options: ["Undergraduate", "Graduate", "PhD"],
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {
          Undergraduate: [
            {
              id: "testScores",
              name: "Test Scores",
              type: "select",
              options: ["SAT", "ACT", "GRE", "GMAT"],
              api: false,
              validation: null,
              edges: [],
              conditionalEdges: {},
            },
          ],
          Graduate: [
            {
              id: "testScores",
              name: "Test Scores",
              type: "select",
              options: ["SAT", "ACT", "GRE", "GMAT"],
              api: false,
              validation: null,
              edges: [],
              conditionalEdges: {},
            },
          ],
        },
      },
      {
        id: "major",
        name: "Major",
        type: "input",
        options: null,
        api: true,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "gpa",
        name: "GPA",
        type: "input",
        options: null,
        api: false,
        validation: {
          min: 0,
          max: 4,
        },
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "testScores",
        name: "Test Scores",
        type: "select",
        options: ["SAT", "ACT", "GRE", "GMAT"],
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "preferredLocation",
        name: "Preferred Location",
        type: "input",
        options: null,
        api: true,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "additionalDescriptionQuestion",
        name: "Additional Description",
        type: "textarea",
        options: null,
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
    ],
    conditionalEdges: {},
  },
  questionAboutUniversity: {
    id: "questionAboutUniversity",
    name: "I Have a Question About a University",
    type: "tag",
    options: null,
    api: false,
    validation: null,
    edges: [
      {
        id: "levelOfStudy",
        name: "Level of Study",
        type: "select",
        options: ["Undergraduate", "Graduate", "PhD"],
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {
          Undergraduate: [
            {
              id: "testScores",
              name: "Test Scores",
              type: "select",
              options: ["SAT", "ACT", "GRE", "GMAT"],
              api: false,
              validation: null,
              edges: [],
              conditionalEdges: {},
            },
          ],
          Graduate: [
            {
              id: "testScores",
              name: "Test Scores",
              type: "select",
              options: ["SAT", "ACT", "GRE", "GMAT"],
              api: false,
              validation: null,
              edges: [],
              conditionalEdges: {},
            },
          ],
        },
      },
      {
        id: "universitySearch",
        name: "University Search Field",
        type: "input",
        options: null,
        api: true,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "relationToMajor",
        name: "Relation to Major/Field of Study",
        type: "checkbox",
        options: null,
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "reviewSubCategories",
        name: "Related Tags",
        type: "tag",
        options: [
          "Admissions & Applications",
          "Financial Aid & Scholarships",
          "Academic Programs & Department",
          "Student Life & Services",
          "Career & Alumni Resources",
          "Athletics & Recreation",
          "Cultural & Arts Activities",
          "Sustainability & Campus Initiatives",
        ],
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "additionalDescriptionQuestion",
        name: "Additional Description",
        type: "textarea",
        options: null,
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
    ],
    conditionalEdges: {},
  },
  reviewUniversity: {
    id: "reviewUniversity",
    name: "Review University",
    type: "tag",
    options: null,
    api: false,
    validation: null,
    edges: [
      {
        id: "universitySearch",
        name: "University Search Field",
        type: "input",
        options: null,
        api: true,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "relationToMajor",
        name: "Relation to Major/Field of Study",
        type: "checkbox",
        options: null,
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "reviewSubCategories",
        name: "Related Tags",
        type: "tag",
        options: [
          "Admissions & Applications",
          "Financial Aid & Scholarships",
          "Academic Programs & Department",
          "Student Life & Services",
          "Career & Alumni Resources",
          "Athletics & Recreation",
          "Cultural & Arts Activities",
          "Sustainability & Campus Initiatives",
        ],
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "userRating",
        name: "Your Ratings",
        type: "select",
        options: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "additionalDescriptionQuestion",
        name: "Additional Description",
        type: "textarea",
        options: null,
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "anonymityOption",
        name: "Anonymity Option",
        type: "checkbox",
        options: null,
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
      {
        id: "guidelinesReminder",
        name: "Guidelines Reminder",
        type: "label",
        options: null,
        api: false,
        validation: null,
        edges: [],
        conditionalEdges: {},
      },
    ],
    conditionalEdges: {},
  },
};

export const Graph = () => {
  // Initialize currentNode with an empty state
  const [currentNode, setCurrentNode] = useState(null);
  const [showOptions, setShowOptions] = useState(true); // Added state to control initial options display

  const handleNodeSelection = (nodeName) => {
    const selectedNode = metaData[nodeName];
    if (selectedNode) {
      setCurrentNode(selectedNode);
      setShowOptions(false); // Hide initial options once a choice is made
    }
  };

  const renderSelectNode = (node) => {
    // Render the select component here
    return (
      <select>
        {node.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

  const renderInputNode = (node) => {
    // Render the input component here
    return <input type="text" placeholder={node.placeholder} />;
  };

  const renderTextareaNode = (node) => {
    // Render the textarea component here
    return <textarea placeholder={node.placeholder} />;
  };

  const renderNodeByType = (node) => {
    switch (node.type) {
      case "select":
        return renderSelectNode(node);
      case "input":
        return renderInputNode(node);
      case "textarea":
        return renderTextareaNode(node);
      // Add more cases for other types as needed
      default:
        return null; // Handle unknown types or provide a default component
    }
  };

  return (
    <div>
      {showOptions ? (
        // Render the initial options
        <div>
          <h1>Choose an option:</h1>
          {Object.keys(metaData).map((key) => (
            <button key={key} onClick={() => handleNodeSelection(key)}>
              {metaData[key].name}
            </button>
          ))}
        </div>
      ) : (
        // Render the selected node
        <div>
          <h1>{currentNode.name}</h1>
          {currentNode.edges.map((child) => (
            <div key={child.id}>
              <h2>{child.name}</h2>
              {renderNodeByType(child)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

*/