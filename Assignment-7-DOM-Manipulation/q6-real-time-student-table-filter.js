// Q6. Real-Time Table Filter Using the input Event
(() => {
  const style=document.createElement('style');
  style.textContent='body{font:16px Arial;background:#f5f7fb;color:#202938;margin:24px}.filter-app{max-width:850px;margin:auto;background:white;padding:24px;border-radius:14px;box-shadow:0 6px 24px #17203312}.filter-app input{box-sizing:border-box;width:100%;padding:11px;border:1px solid #cbd5e1;border-radius:7px;margin:10px 0 18px;font-size:16px}.filter-app table{width:100%;border-collapse:collapse}.filter-app th,.filter-app td{text-align:left;padding:11px;border-bottom:1px solid #e2e8f0}.filter-app th{background:#eff6ff}.no-results{color:#b42318;font-weight:bold;margin-top:14px}';
  document.head.appendChild(style);
  const app=document.createElement('main'); app.className='filter-app';
  app.innerHTML='<h1>Student Table Filter</h1><label for="student-search">Search by name, branch, or CGPA</label><input id="student-search" type="search" placeholder="Type to filter rows..." autocomplete="off"><table><thead><tr><th>Name</th><th>Branch</th><th>CGPA</th></tr></thead><tbody id="student-rows"></tbody></table><p class="no-results" id="no-results" hidden>No results found</p>';
  document.body.appendChild(app);
  const students=[
    {name:'Aarav Sharma',branch:'Computer Science',cgpa:'8.7'},
    {name:'Priya Singh',branch:'Information Technology',cgpa:'9.1'},
    {name:'Rohan Verma',branch:'Mechanical',cgpa:'7.8'},
    {name:'Sneha Gupta',branch:'Electronics',cgpa:'8.4'},
    {name:'Kabir Yadav',branch:'Computer Science',cgpa:'7.9'},
    {name:'Ananya Patel',branch:'Civil',cgpa:'8.2'}
  ];
  const tbody=app.querySelector('#student-rows'), search=app.querySelector('#student-search'), noResults=app.querySelector('#no-results');
  students.forEach((student)=>{
    const row=document.createElement('tr');
    [student.name,student.branch,student.cgpa].forEach((value)=>{const cell=document.createElement('td');cell.textContent=value;row.appendChild(cell);});
    tbody.appendChild(row);
  });
  function filterRows() {
    const query=search.value.trim().toLowerCase(); let visible=0;
    Array.from(tbody.rows).forEach((row)=>{
      const matches=row.textContent.toLowerCase().includes(query); row.hidden=!matches; if(matches) visible++;
    });
    noResults.hidden=visible!==0;
  }
  search.addEventListener('input',filterRows);
})();