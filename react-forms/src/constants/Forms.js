const getSliderMarks = () => {
  const marks = [];
  for (let i = 0; i <= 10; i++) {
    marks.push({ value: i, label: `${i}` });
  }
  return marks;
}

const Forms = {
  hobbyOptions: [
    { value: 'reading', label: 'Reading' },
    { value: 'singing', label: 'Singing'},
    { value: 'webdev', label: 'Web Development'},
    { value: 'other', label: 'Other'},
  ],
  studentStatusOptions: [
    { value: 0, label: 'No' },
    { value: 1, label: 'Yes' },
  ],
  meetingPreferenceOptions: [
    { value: 'virtual', label: 'Virtual' },
    { value: 'physical', label: 'Physical' },
    { value: 'hybrid', label: 'Hybrid' },
  ],
  supervisorOptions: [
    { value: 'lec001', label: 'Mr. John Peterson' },
    { value: 'lec002', label: 'Prof. Edward Simmons' },
    { value: 'lec003', label: 'Miss Francesca Lopez' },
  ],
  modules: [
    { value: 'fyp', label: 'Final Year Project Lectures' },
    { value: 'feedback', label: 'Feedback Sessions' },
    { value: 'other', label: 'Other' },
  ],
  moduleFeedback: [
    { module: 'fyp', rating: 5, feedback: '' },
    { module: 'feedback', rating: 5, feedback: '' },
    { module: 'other', rating: 5, feedback: '' },
  ],
  getSliderMarks,
};

export default Forms;