import Competition from '../models/competition.js'; // Ajuste o caminho conforme necessário

// Criar uma nova competição
export const createCompetition = async (req, res) => {
  try {
    const { name, type, ...outrosCampos } = req.body; // Adicione outros campos conforme necessário
    const newCompetition = await Competition.create({ name, type, ...outrosCampos });
    res.status(201).json(newCompetition);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Finalizar uma competição
export const finishCompetition = async (req, res) => {
  try {
    const { id } = req.params;
    const competition = await Competition.findByPk(id);

    if (!competition) {
      return res.status(404).json({ error: 'Competição não encontrada.' });
    }

    competition.status = 'finished'; // Assumindo que você tem um campo 'status'
    await competition.save();

    res.status(200).json(competition);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar todas as competições
export const listCompetitions = async (req, res) => {
  try {
    const competitions = await Competition.findAll();
    res.status(200).json(competitions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obter uma competição específica pelo ID
export const getCompetitionById = async (req, res) => {
  try {
    const { id } = req.params;
    const competition = await Competition.findByPk(id);

    if (!competition) {
      return res.status(404).json({ error: 'Competição não encontrada.' });
    }

    res.status(200).json(competition);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
