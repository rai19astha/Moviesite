
  const [selectAll, setSelectAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const handleToggleCheckbox = (index) => {
    const updatedCheckedItems = {
      ...checkedItems,
      [index]: !checkedItems[index],
    };
    setCheckedItems(updatedCheckedItems);
    setSelectAll(Object.values(updatedCheckedItems).every(Boolean));
  };

  const handleSelectAll = (event) => {
    const { checked } = event.target;
    const updatedCheckedItems = {};
    data.forEach((_, index) => {
      updatedCheckedItems[index] = checked;
    });
    setCheckedItems(updatedCheckedItems);
    setSelectAll(checked);
  };
