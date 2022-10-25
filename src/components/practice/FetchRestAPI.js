import React from "react";
import { useEffect } from "react";
const FetchRestAPI = () => {
  var courseAPI = "http://localhost:3000/courses";

  function start() {
    handleCreateForm();
  }

  start();

  // functions
  function getCourses(callback) {
    fetch(courseAPI)
      .then(function (response) {
        return response.json();
      })
      .then(callback);
  }
  function createCourse(data, callback) {
    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(courseAPI, options)
      .then(function (response) {
        return response.json();
      })
      .then(callback);
  }

  function renderCourses(courses) {
    var listCoursesBlock = document.querySelector("#courses-list");
    console.log(courses);
    var htmls = courses.map(function (course) {
      return `
      <li>
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick="handleDeleteCourse(${course.id})">Delete</button>
      </li>`;
    });

    listCoursesBlock.innerHTML = htmls.join("");
  }

  useEffect(() => {
    var createBtn = document.querySelector("#create");
    console.log(createBtn);
    createBtn.onclick = function () {
      var name = document.querySelector('input[name="name"]').value;
      var description = document.querySelector(
        'input[name="description"]'
      ).value;

      var formData = {
        name: name,
        description: description,
      };
      createCourse(formData, function () {
        getCourses(renderCourses);
      });
    };
  });
  function handleCreateForm() {}
  // function handleDeleteCourse(id) {
  //   var options = {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   fetch(courseAPI + "/" + id, options)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function () {});
  // }

  return (
    <div>
      <div>
        <h2> Course list</h2>
        <ul id="courses-list"></ul>
      </div>
      <div>
        <div>
          <label>Name </label>
          <input type="text" name="name"></input>
        </div>
        <div>
          <label>Description </label>
          <input type="text" name="description"></input>
        </div>
        <div>
          <button id="create">Create</button>
        </div>
      </div>
    </div>
  );
};

export default FetchRestAPI;
