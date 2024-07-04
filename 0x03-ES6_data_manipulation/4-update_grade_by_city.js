/**
 * Updates student objects located in a specific city with grades from another array of grades.
 * @param {Array} array - Array of student objects to filter and update.
 * @param {string} city - City name to filter student objects by location.
 * @param {Array} arr - Array of grade objects containing studentId and corresponding grades.
 * @returns {Array} Array of updated student objects with grades applied. Returns an empty array if input arrays are invalid or no matching studentId is found.
 */
export default function updateStudentGradeByCity(array, city, arr) {
  if (Array.isArray(array) && Array.isArray(arr)) {
    return array.filter(student => student.location === city).map(student => { 
      const gradeObj = arr.find(item => item.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A'
      };
    });
  } else {
    return [];
  }
}

