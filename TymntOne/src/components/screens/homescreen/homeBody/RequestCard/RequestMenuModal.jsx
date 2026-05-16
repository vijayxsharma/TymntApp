import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const RequestMenuModal = ({
  visible,
  onClose,
  onDelete,
  onEdit,
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>
            What would you like to do with this request?
          </Text>

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.editBtn}
              onPress={onEdit}>
              <Text style={styles.editText}>
                Edit
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={onDelete}>
              <Text style={styles.deleteText}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={onClose}>
            <Text style={styles.cancelText}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RequestMenuModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '85%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
  },

  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 24,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  editBtn: {
    flex: 1,
    backgroundColor: '#E0F2FE',
    paddingVertical: 12,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },

  deleteBtn: {
    flex: 1,
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
  },

  editText: {
    color: '#0284C7',
    fontWeight: '600',
    fontSize: 15,
  },

  deleteText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },

  cancelBtn: {
    marginTop: 18,
    alignItems: 'center',
  },

  cancelText: {
    color: '#64748B',
    fontSize: 15,
    fontWeight: '500',
  },
});