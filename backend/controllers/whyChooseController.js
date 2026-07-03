import WhyChoose from '../models/WhyChoose.js';

// Retrieve all cards ordered by sort order
export const getWhyChooseItems = async (req, res) => {
  try {
    const items = await WhyChoose.findAll({
      order: [
        ['sortOrder', 'ASC'],
        ['id', 'ASC']
      ]
    });
    return res.json(items);
  } catch (error) {
    console.error('Error fetching WhyChoose items:', error);
    return res.status(500).json({ message: 'Failed to fetch items.' });
  }
};

// Create a new card
export const createWhyChooseItem = async (req, res) => {
  const { title, description, iconName, sortOrder } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required.' });
  }

  try {
    const newItem = await WhyChoose.create({
      title,
      description,
      iconName: iconName || 'HelpCircle',
      sortOrder: sortOrder || 0
    });
    return res.status(201).json(newItem);
  } catch (error) {
    console.error('Error creating WhyChoose item:', error);
    return res.status(500).json({ message: 'Failed to create item.' });
  }
};

// Update an existing card
export const updateWhyChooseItem = async (req, res) => {
  const { id } = req.params;
  const { title, description, iconName, sortOrder } = req.body;

  try {
    const item = await WhyChoose.findByPk(id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found.' });
    }

    await item.update({
      title: title !== undefined ? title : item.title,
      description: description !== undefined ? description : item.description,
      iconName: iconName !== undefined ? iconName : item.iconName,
      sortOrder: sortOrder !== undefined ? sortOrder : item.sortOrder
    });

    return res.json(item);
  } catch (error) {
    console.error('Error updating WhyChoose item:', error);
    return res.status(500).json({ message: 'Failed to update item.' });
  }
};

// Delete a card
export const deleteWhyChooseItem = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await WhyChoose.findByPk(id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found.' });
    }

    await item.destroy();
    return res.json({ message: 'Item deleted successfully.' });
  } catch (error) {
    console.error('Error deleting WhyChoose item:', error);
    return res.status(500).json({ message: 'Failed to delete item.' });
  }
};
