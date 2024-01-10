import Result from '../models/result.js'; 

// Adicionar um novo resultado
export const addResult = async (req, res) => {
  try {
    const newResult = await Result.create(req.body);
    res.status(201).json(newResult);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar todos os resultados
export const listResults = async (req, res) => {
  try {
    const results = await Result.findAll();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um resultado existente
export const updateResult = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Result.findByPk(id);

    if (!result) {
      return res.status(404).json({ error: 'Resultado não encontrado.' });
    }

    await result.update(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar um resultado
export const deleteResult = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Result.findByPk(id);

    if (!result) {
      return res.status(404).json({ error: 'Resultado não encontrado.' });
    }

    await result.destroy();
    res.status(200).json({ message: 'Resultado deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
