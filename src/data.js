export const data = {
  python: [
    {
      question: 'What is the maximum length of a Python identifier?',
      options: ['32', '16', '128', 'No fixed length is specified'],
      answer: 3,
    },
    {
      question:
        'What will be the output of the following code snippet? <code lang="python">print(2**3 + (5 + 6)**(1 + 1))</code>',
      options: ['129', '8', '121', 'None of the above'],
      answer: 0,
    },
    {
      question: `What will be the datatype of the var in the below code snippet? <code lang="python">
        var = 10 <br />
        print(type(var)) <br />
        var = "Hello" <br />
        print(type(var))
      </code>`,
      options: ['str and int', 'int and int', 'str and str', 'int and str'],
      answer: 3,
    },
  ],
  javascript: [
    {
      question: `What is the result of the following code? <code lang="javascript">
      5 + "5"
    </code>`,
      options: ['0', '1', '10', '55'],
      answer: 3,
    },
    {
      question: 'Which of the following is not a JavaScript data type?',
      options: ['String', 'Boolean', 'Float', 'Undefined'],
      answer: 2,
    },
    {
      question: 'What does the "this" keyword refer to in JavaScript?',
      options: [
        'The global object',
        'The object that the function is a method of',
        'The object that the function was called on',
        'The object that the function is defined in',
      ],
      answer: 2,
    },
    {
      question:
        'What does the following expression evaluate to: [1, 2, 3].slice(1)?',
      options: ['[1, 2, 3]', '[1]', '[2, 3]', '[3]'],
      answer: 2,
    },
    {
      question: 'Which of the following is not a JavaScript loop statement?',
      options: ['for', 'while', 'do-while', 'switch'],
      answer: 3,
    },
  ],
  cpp: [],
  c: [],
  java: [],
};
