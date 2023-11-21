const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


const contentData = {
    '/about': 'Content for the About page',
    '/flag': 'Content for the Flag page',
  };

  const policyPages = {
    'about': {
      pageTitle: 'About Us',
      pageContent: 'Your about content goes here...',
    },
    'terms-and-conditions': {
      pageTitle: 'Terms and Conditions',
      pageContent: 'Your terms and conditions content goes here...',
    },
    // Add more policy pages as needed...
  };
// Enable CORS for all routes
app.use(cors());

// Define API routes
app.get('/api/about', (req, res) => {
    const aboutData = {
      title: 'About the International Flag of Peace',
      welcomeMessage: 'Welcome to the International Flag of Peace project. Our mission is to promote peace, unity, kindness, and tolerance among people from all walks of life, and every place in the world. This flag represents our commitment to a world where love, understanding, and compassion prevail.',
      storyTitle: 'The Story Behind the Flag',
      story: 'When the 9-11 attack happened, our visionary, Camille, felt a deep calling to create a symbol of peace that could belong to everyone living on this beautiful planet. That moment led to this journey of crafting the \'International Flag of Peace.\'',
      messageTitle: 'Our Message',
      message: 'The flag\'s colors and elements symbolize the core values of people everywhere. The blue represents peace, the green stands for harmony with nature and with each other, and the white symbolizes unity. Yellow is the sun, which is lighting our way each day; the heart, doves, and olive branches are the symbols of love. We believe in a world where kindness and charity prevail among our brothers and sisters everywhere.',
      involvedTitle: 'Get Involved',
      involvedMessage: 'If you resonate with our mission, we invite you to join us in promoting peace and spreading the message of the \'International Flag of Peace.\' Together, we can make our beautiful world a more peaceful place to live and thrive.',
    };
  
    res.json(aboutData);
  });

app.get('/api/terms-and-conditions', (req, res) => {
  const termsAndConditionsContent = {
    pageTitle: 'Terms and Conditions',
    pageContent: 'Your terms and conditions content goes here...',
  };
  res.json(termsAndConditionsContent);
});

app.get('/api/dynamicData', (req, res) => {
    const dynamicData = 'Your dynamic data from the backend';
    res.json(dynamicData);
  });

  app.get('/api/common-content', (req, res) => {
    const commonContent = {
      title: 'About the International Flag of Peace (from Backend)',
      content:
        'Welcome to the International Flag of Peace project. Our mission is to promote peace, unity, and kindness among people from all walks of life, and every place in the world. This flag represents our commitment to a world where love, understanding, and compassion prevail.',
    };
    res.json(commonContent);
  });

  app.get('/api/flag', (req, res) => {
    const flagContent = {
      flagPageContent: `
        My name is Camille. I am a peaceful soul, driven by the profound belief that a more harmonious world is not just a dream but an achievable reality.
        I envision a world characterized by unwavering kindness, compassion, and unity among all the diverse inhabitants of this beautiful planet.
  
        In the wake of the tragic 9/11 attack, I felt an even stronger calling within me to embark on a pathway to share this message of Peace.
        It was a resolute conviction that the people of our Earth needed a symbol, a flag, that could serve as a universal emblem of peace and hope.
        I envisioned a flag that transcended borders, languages, and cultures. A flag that belongs to every individual residing on this extraordinary planet.
  
        It was in that moment of clarity that a quiet yet resolute voice within me whispered, 'Why not? It's up to you.'
        And with that divine encouragement, I embarked on an inspiring journey to bring into existence the 'International Flag of Peace.'
  
        This mission statement is more than just a symbol; it's a testament to the power of shared values and our collective commitment to peace.
        It represents our unwavering dedication to creating a world where love, understanding, compassion and unity prevail.
        It is a reminder that peace is not an abstract concept. It is a choice we make every day.
  
        The 'International Flag of Peace' is a call to action, a call for individuals from all walks of life to come together, work together,
        and build a world that we can proudly pass on to future generations. It is a symbol of our shared humanity and our shared responsibility
        to create a better world for all.
      `,
      flagImageUrl: '/assets/Camille Yogi - Flag - Int Flag of Peace.png',
    };
    res.json(flagContent);
  });

  app.get('/api/data', (req, res) => {
    const backendData = {
      message: 'This is data from the backend.',
    };
    res.json(backendData);
  });

  app.get('/api/about', (req, res) => {
    const aboutUsText = 'We are dedicated to promoting peace, unity, compassion, and understanding among all people. Our flag symbolizes the hope for a more peaceful world.';
    res.json({ aboutUsText });
  });
  
  app.get('/api/mission', (req, res) => {
    const missionText = 'Your mission content goes here...';
    res.json({ missionText });
  });


  app.get('/api/content/:routePath', (req, res) => {
    const { routePath } = req.params;
  
    // Check if content exists for the given route path
    if (Object.prototype.hasOwnProperty.call(contentData, routePath)) {
      const dynamicContent = contentData[routePath];
      res.json({ content: dynamicContent });
    } else {
      res.status(404).json({ error: 'Content not found' });
    }
  });

  app.get('/api/pages/:pageName', (req, res) => {
    const pageName = req.params.pageName;
  
    if (policyPages[pageName]) {
      res.json(policyPages[pageName]);
    } else {
      res.status(404).json({ error: 'Page not found' });
    }
  });

  app.get('/api/last-updated', (req, res) => {
    const lastUpdatedDate = new Date().toDateString(); // Replace this with your logic to get the actual last updated date
    res.json({ lastUpdatedDate });
  });
// Add more API routes as needed...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
