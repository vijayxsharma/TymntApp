import React, {useEffect, useState} from 'react';

import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const EditRequestModal = ({
  visible,
  onClose,
  requestData,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    max_budget: '',
  });

  useEffect(() => {
    if (requestData) {
      setFormData({
        category: requestData?.category || '',
        description: requestData?.description || '',
        max_budget: String(
          requestData?.max_budget || '',
        ),
      });
    }
  }, [requestData]);

  return (
    <Modal transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.heading}>
            Edit Request
          </Text>

          <TextInput
            placeholder="Category"
            value={formData.category}
            onChangeText={text =>
              setFormData({
                ...formData,
                category: text,
              })
            }
            style={styles.input}
          />

          <TextInput
            placeholder="Description"
            multiline
            value={formData.description}
            onChangeText={text =>
              setFormData({
                ...formData,
                description: text,
              })
            }
            style={[styles.input, {height: 100}]}
          />

          <TextInput
            placeholder="Budget"
            keyboardType="numeric"
            value={formData.max_budget}
            onChangeText={text =>
              setFormData({
                ...formData,
                max_budget: text,
              })
            }
            style={styles.input}
          />

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={onClose}>
              <Text>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => onSubmit(formData)}>
              <Text style={{color: '#fff'}}>
                Post Request
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditRequestModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },

  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 14,
    color: '#000',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:1
  },

  cancelBtn: {
    backgroundColor: '#334155',
    padding: 12,
    borderRadius: 10,
    paddingLeft:35,
    paddingRight:35,
  },

  submitBtn: {
    backgroundColor: '#0EA5E9',
    padding: 12,
    borderRadius: 10,
  },
});